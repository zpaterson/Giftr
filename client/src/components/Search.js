import React from 'react';
import './search.css';

class Search extends React.Component {
  state = {
    searchText: "",
    products: [],
    itemChecked: {}
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
    }).then(res =>res.json())
      // .then(data => data.products)
      .then(results => this.setState({ products: results }))
      .catch(err => console.log(err))
  };

  // onClick = (e) => {
  //   e.preventDefault();
  //   let itemChecked = this.state.itemChecked;
  //   for(var key in itemChecked){
  //     if(itemChecked[key] === true) {
  //       console.log(key)
  //     }
  //     //if(itemChecked. === true){
  //       // add to db
  //      // remove from db
  //   }

  //   //let item = e.target.itemChecked;

  //  // console.log({itemChecked});
  // }
  

//TODO: Consider removing items from itemChecked when unchecked (rather than setting to false).
checkItem(product, e) {
    let itemChecked = this.state.itemChecked;
    itemChecked[product] = e.target.checked;
    this.setState({ itemChecked });
} 

  onClick = (e) => {
    e.preventDefault();

    let itemChecked = this.state.itemChecked;
    for (var key in itemChecked) {
      if (itemChecked[key] === true) {
        console.log(key)
        fetch('/added', {
          method: "POST",
          body: JSON.stringify({
        listing_id: key,
        title: itemChecked.title,
        description: itemChecked.description
          }),
          headers: {
            "content-type": "application/json"
          },
        }).then(res => res.json())
          .then(res => console.log(res))
      }
    }
  }
  
  render() {
    console.log("this.state.products:",this.state.products)
    console.log("this.state.products:",this.state.products[0])
    console.log("this.state.itemChecked:", this.state.itemChecked)
    console.log("this.state.listing_id:", this.state.listing_id)

    return (
      <div className="search-form">
        <form onSubmit={this.onTextChange} method="post" action='/etsy'>
          <label htmlFor="searchText">What does your friend like?</label><br />
          <input id="searchText" name="searchText" type="text" autoComplete="given-name" />
          <button>Submit</button>
        </form>
        <br />
        <form>
          <ul>
            {this.state.products.map(
              product=> (
              <li key={product}>
                <input type="checkbox" onChange={(e) => this.checkItem(product.listing_id, e) }/>{product.title}
              </li>
              )
              )
            }
            <button onClick={this.onClick} method="post" action='/added'>Save</button>
          </ul>
        </form>
        <br />
      </div>
    );
  }
}

export default Search;