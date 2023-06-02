import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    count: 0,
    isShow: true,
  };

  handlePlus = () => this.setState({ count: this.state.count + 1 });
  handleMinus = () =>
    this.state.count > 0
      ? this.setState({ count: this.state.count - 1 })
      : null;
  handleShow = () => this.setState({ isShow: !this.state.isShow });
  componentDidMount(){
    console.log('componentDidMount');
  }
  componentDidUpdate(){
    console.log("componentDidUpdate")

  }
  componentWillUnmount(){
    console.log("componentWillUnmount")

  }
  render() {
    console.log("render")

    return (
      <div className="App">
        <button onClick={this.handleShow}>Show</button>
        {this.state.isShow && (
          <>
            <h1>{this.state.count}</h1>
            <button onClick={this.handlePlus}>+</button>
            <button onClick={this.handleMinus}>-</button>
          </>
        )}
      </div>
    );
  }
}
