import { Component } from "react";

export class ClassComponent extends Component {
  constructor() {
    super();

    console.log("Set state");
    this.state = {
      count: 1,
    };
  }

  componentDidMount() {
    console.log("Component mounted");
  }

  componentDidUpdate() {
    console.log("Component updated");
  }

  componentWillUnmount() {
    console.log("Component unmounted");
  }

  render() {
    return (
      <>
        <h1>Class Component</h1>
        <p>Count: {this.state.count}</p>
        {this.props.children}
        <h1>Class Component</h1>
        <button onClick={() => this.setState({ count: 2 })}>Change to 2</button>
      </>
    );
  }
}
