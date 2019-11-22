import React from "react";
import axios from "axios";
import {
    Button,
    Input,
    TextField,
    Select,
    InputLabel,
    MenuItem
  } from "@material-ui/core";

export default class Axios extends React.Component {
  state = {
    categories: []
  };
  componentDidMount() {
    axios.get(`https://api.chucknorris.io/jokes/categories`).then(res => {
      const categories = res.data;
      this.setState({ categories });
    });
  }
  render() {
    if (this.state.categories.value === undefined) {
      return <h1>Not here</h1>;
    }
    return (
      <Select>
        {this.state.categories.value.map( => (
          <MenuItem key={this.state.categories.indexOf(category)}>{categories.catagory}</MenuItem>
        ))}
      </Select>
    );
  }
}