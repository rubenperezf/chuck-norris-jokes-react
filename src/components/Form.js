import React from "react";
import {
  Button,
  Input,
  TextField,
  Select,
  InputLabel,
  MenuItem
} from "@material-ui/core";
import Axios from "./Axios";
import Explicit from './Explicit'
import Nerdy from './Nerdy'

export default class Form extends React.Component {
  state = {
    isDisplayed: false,
    category: 'none'
  };

  changeIsDisplayed = () => {
    this.setState({
      isDisplayed: true
    });
  };

  render() {
    if (this.state.isDisplayed) {
      if(this.state.category === 'explicit'){
        return <Explicit></Explicit>
      }else if(this.state.category === 'nerdy'){
        return <Nerdy></Nerdy>
      }else{
        return <Axios></Axios>
      }

    }
    return (
      <form>
        <Select value={this.state.category} onChange={e => this.setState({
            category: e.target.value})}>
          <MenuItem value="none">None</MenuItem>
          <MenuItem value="explicit">Explicit</MenuItem>
          <MenuItem value="nerdy">Nerdy</MenuItem>
          <h1>{console.log(this.state.category)}</h1>
        </Select>
        <Button onClick={this.changeIsDisplayed}>Click</Button>
      </form>
    );
  }
}
