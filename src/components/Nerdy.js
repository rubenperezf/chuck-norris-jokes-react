import React from "react";
import axios from "axios";

export default class Axios extends React.Component {
  state = {
    jokes: []
  };
  componentDidMount() {
    axios.get(`http://localhost:2500/jokes`).then(res => {
      const jokes = res.data;
      this.setState({ jokes });
    });
  }
  render() {
    if (this.state.jokes.value === undefined) {
      return <h1>Not here</h1>;
    }
    return (
      <ul>
        {this.state.jokes.value
          .filter(jokes => jokes.categories[0] === "nerdy")
          .map(jokes => (
            <li key={jokes.id}>{jokes.joke}</li>
          ))}
      </ul>
    );
  }
}