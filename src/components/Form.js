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

export default class Form extends React.Component {
  state = {
    isDisplayed: false
  };

  changeIsDisplayed = () => {
          this.setState({
              isDisplayed: true
          })
      }

  render() {
    if (this.state.isDisplayed) {
        console.log("here");
        
      return (<Axios></Axios>);
    }
    return (
      <form>
        <Input></Input>
        <Select value="[]">
            <MenuItem value="[]">None</MenuItem>
            <MenuItem value="explicit">Explicit</MenuItem>
        </Select>
        <Button onClick={this.changeIsDisplayed}>Click</Button>
      </form>
    );
  }
}
