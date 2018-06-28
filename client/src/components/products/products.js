import React, { Component } from 'react';
import Signup from '../Signup';
import './products.css';


class Products extends Component {
    state = {
        products: []
    };

    // displays mysql data 
    componentDidMount() {
        this.getProducts();
    }

    getProducts = () => {
        console.log("getting products");
        // looks for /products in server.js
        fetch('/products')
            .then((res) => {
                return res.json();
            })
            .then(res => this.setState({ products: res.data }))
            .catch(err => console.error(err))
         //console.log(data);
           console.log(this.state.products);
    }


    render() {
        const { products } = this.state;
        const renderProduct = (title) =>
        <li
            key={title}>
            {title}
        </li>
        return (
            <div className="page">
                <Signup auth={this.props.auth} history={this.props.history} />
                    <div className="Products">
                    <h1>Your saved products:</h1>
                    <ul>
                        {products.map(product =>renderProduct(product.TITLE))}
                    </ul>
                    </div>
            </div>
        );
    }
}


export default Products;
