import React, {Component} from 'react';

class Stopwatch extends Component {
  state = {
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0
  };

  componentDidMount() {
    this.intervalID = setInterval(() => {
      return this.tick();
    }, 100);
  }

  tick = () => {
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState((prevState) => {
        return {
          previousTime: now,
          // should previousTime also be set using prevState?
          elapsedTime: prevState.elapsedTime + (now - this.state.previousTime)
        };
      });
    }
  };

  handleStopwatch = () => {
    this.setState((prevState) => {
      return {
        isRunning: !prevState.isRunning
      };
    });
    // runs when start/stop is clicked
    // so isRunning will still be false when press "start"
    if (!this.state.isRunning) {
      this.setState({
        previousTime: Date.now()
      });
    }
  };

  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">
          {Math.floor(this.state.elapsedTime / 1000)}
        </span>
        <button onClick={this.handleStopwatch}>
          {this.state.isRunning ? 'Stop' : 'Start'}
        </button>
        <button>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;