import React, { Component } from 'react';

export default class Search extends Component {
  state = {
    searchText: "",
    amount: 15,
    products: []
};


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
    console.log(this.state.products)
    return (
      <div className="search-form">
        <form onSubmit={this.onTextChange} method="post" action='/etsy'>
          <label htmlFor="searchText">What does your friend like?</label><br />
          <input id="searchText" name="searchText" type="text" autoComplete="given-name" />
          <button>Submit</button>
        </form>
        <br />
        <ul>
          {this.state.products.map(
            product=>
             <li key={product}>
               <input type="checkbox"/>{product}
            </li>
            )
          }
        </ul>
        <br />
      </div>
    );
  }
}