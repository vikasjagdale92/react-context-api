import React, { Component } from "react";
import User from "./User";
import { Provider } from "./Context";

class App extends Component {
  state = {
    name: "Vikas",
    value: 10
  };

  handleClickContext = () => {
    this.setState({
      value: this.state.value + 1
    });
  };
  render() {
    const textConst = {
      textAlign: "center"
    };
    const stateValue = {
      data: this.state,
      handleClick: this.handleClickContext
    };
    return (
      <div style={textConst}>
        <Provider value={stateValue}>
          <User />
        </Provider>
      </div>
    );
  }
}

export default App;
