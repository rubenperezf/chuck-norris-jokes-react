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
    catagories: []
  };
  componentDidMount() {
    axios.get(`http://api.icndb.com/jokes/catagories`).then(res => {
      const catagories = res.data;
      this.setState({ catagories });
    });
  }
  render() {
    if (this.state.catagories.value === undefined) {
      return <h1>Not here</h1>;
    }
    return (
      <Select>
        {this.state.catagories.value.map(catagories => (
          <MenuItem key={catagories}>{catagories.catagory}</MenuItem>
        ))}
      </Select>
    );
  }
}