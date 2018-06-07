import React, { Component } from 'react';
import './products.css';


class Products extends Component {
    state = {
        products: []
    };

    // displays mysql data 
    componentDidMount() {
        this.getProducts();
    }

    getProducts = _ => {
        console.log("getting products");
        // looks for /products in server.js
        fetch('/products')
            .then((res) => {
                return res.json();
            })
            .then(res => this.setState({ products: res.data[0].title }))
            .catch(err => console.error(err))
        // console.log(data);
        //   console.log(this.state.products);

    }

    // renderProduct = ({ product_id, name }) =>
    //     <li
    //         key={product_id}>{name}
    //     </li>

    render() {
        const { products } = this.state;
        return (
            <div className="Products">
                 {/* {products.map(product =>this.renderProduct)} */}
                 <p>{products}</p>
             </div>
        );
    }
}


export default Products;
