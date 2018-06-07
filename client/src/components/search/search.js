import React, { Component } from 'react';
//import Products from '../products/products';


// request from own endpoint, from own endpoint request from Etsy endpoint
// set up Sequel Pro tables

//const API_KEY = process.env.REACT_APP_ETSY_API_KEY;

//const API_URL = process.env.API_URL;

class Search extends Component {
  state = {
    searchText: "",
    amount: 15,
    products: []
  };

  // componentDidMount() {
  //   this.getData();
  // }

  // getData = (query) => {
  //   fetch(`http://localhost:3000/etsy=${query}`, {
  //     method: 'GET',
  //     headers: {
  //       "Content-Type": "application/json", "Access-Control-Allow-Origin": "*"
  //     }
  //   })
  // }

  // getData = (query) => {
  //   // looks for /etsy in server.js
  //   fetch(`/etsy=${query}`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then(res => this.setState({ products: res.data[0].title }))
  //     .catch(err => console.error(err))
  //   // console.log(data);
  //   //   console.log(this.state.products);

  // }

  onTextChange = (e) => {
    e.preventDefault();
    let keyword = e.target.searchText.value;

    fetch('/etsy', {
      method: 'POST',
      body: JSON.stringify({
        keywords: keyword
      }),
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => res.json())
      // .then(data => data.products)
      .then(results => this.setState({ products: results }))
      .catch(err => console.log(err))
  };


  render() {
    // prints empty array in client console []
    console.log(this.state.products);

    return (
      <div>
        <div id='results'></div>
        <form onSubmit={this.onTextChange} method="post" action='/etsy'>
          <label htmlFor="searchText">What does your friend like?</label>
          <input id="searchText" name="searchText" type="text" autoComplete="given-name" />

          <button>Submit</button>
        </form>
        <br />

        <ul>
          {this.state.products.map(
            product=>
            <li>{product}</li>
            )
          }
        </ul>
        <br />
      </div>
    );
  }
}

export default Search;