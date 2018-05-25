import React, { Component } from 'react';
import './products.css';


class Products extends Component {
    state = {
            products:[]
    };

    componentDidMount(){
        this.getProducts();
    }

    getProducts = _ => {
        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(res => this.setState({ products: res.data }))
            .catch(err => console.error(err))
                // console.log(data);
    }
    
    renderProduct = ({ product_id, name }) => 
        <li 
            key={product_id}>{name}
        </li>

    render() {
        const { products } = this.state;
        return (
            <div className="Products">
             {products.map(this.renderProduct)}
            </div>
        );
    }
}

export default Products;
