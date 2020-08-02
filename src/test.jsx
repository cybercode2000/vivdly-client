import React, { Component } from "react";

class test extends Component {
    state = {};
    callHandler = (id) => {
        alert(id)
    }
  render() {
    return (
      <React.Fragment>
        <span onClick={() => this.callHandler("damilare")}> here</span> hello
      </React.Fragment>
    );
  }
}

export default test;
