import React from "react";
import styled from "styled-components";
import BreakLength from "./components/BreakLength";
import SessionLength from "./components/SessionLength";
import Timer from "./components/Timer";

const AppWrapper = styled.div`
  width: 50%;
  margin: 15vh auto 0 auto;
  text-align: center;

  h1 {
    font-size: 3rem;
    padding-bottom: 20px;
  }
`;

class App extends React.Component {
  state = {
    timeMin: 25,
    timeSec: 0,
    breakMin: 5,
    breakSec: 0
  };
  reset = () => {
    this.setState({
      timeMin: 25,
      timeSec: 0,
      breakMin: 5,
      breakSec: 0
    });
  };
  incrementBreak = () => {
    if(this.state.breakMin === 60) return;
    this.setState({
      breakMin: this.state.breakMin + 1
    });
  };
  decrementBreak = () => {
    if (this.state.breakMin === 1) return;
    this.setState({
      breakMin: this.state.breakMin - 1
    });
  };
  incrementTime = () => {
    if(this.state.timeMin === 60) return;
    this.setState({
      timeMin: this.state.timeMin + 1
    });
  };
  decrementTime = () => {
    if (this.state.timeMin === 1) return;
    this.setState({
      timeMin: this.state.timeMin - 1
    });
  };
  render() {
    return (
      <AppWrapper>
        <h1>Pomodoro Clock</h1>
        <BreakLength
          breakMin={this.state.breakMin}
          incrementBreak={this.incrementBreak}
          decrementBreak={this.decrementBreak}
        />
        <SessionLength
          timeMin={this.state.timeMin}
          incrementTime={this.incrementTime}
          decrementTime={this.decrementTime}
        />
        <Timer reset={this.reset} min={this.state.timeMin} sec={this.state.timeSec}/>
      </AppWrapper>
    );
  }
}

export default App;
