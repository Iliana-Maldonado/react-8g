import React, { Component } from "react";
import { Badge, Container, Button } from "reactstrap";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.date = {
      initialDate: new Date().toLocaleTimeString(),
      date: new Date().toLocaleTimeString(),
      color: "danger",
      counter: 1,
    };

    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  handleClick = () => {
    console.log("Me clickearon desde un método");
    let { counter } = this.state;
    counter = counter + 1;
    this.setState({
      counter,
    });
  };

  render() {
    return (
      <>
        <h1>
          <Badge color={this.state.color}>{this.state.date}</Badge>
        </h1>
        <Container>
          <p>{this.state.counter}</p>
          <Button onClick={this.handleClick}> Click Me! </Button>
        </Container>
      </>
    );
  }
}

export default Clock;
