import React, { Component } from 'react';
import './products.css';


class Products extends Component {
    constructor(){
        super();
        this.state = {
            products:[]
        };
    }

    componentDidMount(){
    // switch fetch with axios
     fetch('/products')
        .then(res => res.json())
         .then(products => {
          //console.log(products);

             this.setState({ products: products.results });
                // , () => 
                // console.log('Items fetched..' , products));   
        })
    }
    

    render() {
        return (
            <div>
                <h2>Gifts</h2>
                <ul>
                    {this.state.products.map(product =>
                        <li key={product.id}>{product.title}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Products;
