import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
   
    componentDidMount() {
        let that = this;
        this.timerId = setInterval(
            function(){
                return that.tick();
            }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
      }
    tick() {
        this.setState({
            date : new Date()
        });
    }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  export default Clock;