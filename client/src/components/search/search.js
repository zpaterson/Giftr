import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import Products from '../products/products';


// request from own endpoint, from own endpoint request from Etsy endpoint
// set up Sequel Pro tables

const API_KEY = process.env.REACT_APP_ETSY_API_KEY;

const API_URL = process.env.API_URL;

class Search extends Component {
  state = {
    searchText: "",
    amount: 15,
    products: []
  };

  getData = (query) => {
    fetch(`http://localhost:3000/etsy=${query}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json", "Access-Control-Allow-Origin": "*"
      }
    })
  }
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
        <SelectField
          name="amount"
          floatingLabelText="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
        </SelectField>
        <br />
      </div>
    );
  }
}

export default Search;