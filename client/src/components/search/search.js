import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


// request from own endpoint, from own endpoint request from Etsy endpoint
// set up Sequel Pro tables

class Search extends Component {
    state = {
        searchText: "",
        amount: 15,
        products: []
    }

    render() {
        // console.log(this.state.products);
        return (
            <div>
                {/* <br/>
        <form>
            <input type="text" name="firstName" placeholder="First Name"/>
                <br />
            <input type="text" name="lastName" placeholder="Last Name"/>
                <br />
            <input type="text" name="password" placeholder="Password"/>
                <br />
            <input type="text" name="confirmPassword"placeholder="Confirm Password"/>
                <br />
            <input type="email" name="email"placeholder="email"/>
                <br/>
            <button>Submit</button>
        </form> */}
                <TextField
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    floatingLabelText="Search For Gifts"
                    fullWidth={true}
                />
                <br />
                <SelectField
                    name="results"
                    floatingLabelText="Results"
                    value={this.state.value}
                    onChange={this.handleChange}
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