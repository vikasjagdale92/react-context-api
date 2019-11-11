import React, { Component } from "react";
import { Consumer } from "./Context";

export default class User extends Component {
  render() {
    return (
      <div>
        <h4>Guest Component</h4>
        <Consumer>
          {({ data, handleClick }) => (
            <div>
              <h5>{data.name}</h5>
              <h5>{data.value}</h5>

              <button onClick={handleClick}>Click Me</button>
            </div>
          )}
        </Consumer>
      </div>
    );
  }
}
