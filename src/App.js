import React from "react";
import styled from "styled-components";
import BreakLength from "./components/BreakLength";
import SessionLength from "./components/SessionLength";
import Timer from "./components/Timer";

const AppWrapper = styled.div`
  width: 50%;
  margin: 12vh auto 0 auto;
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
    breakSec: 0,
    isPaused: true,
    isSession: true
  };
  reset = () => {
    this.setState({
      timeMin: 25,
      timeSec: 0,
      breakMin: 5,
      breakSec: 0,
      isPaused: true,
      isSession: true
    });
    clearInterval(this.time);
    clearInterval(this.breakTime);
    this.audioBeep.currentTime=0;
    this.audioBeep.pause();
  };
  incrementBreak = () => {
    if (this.state.breakMin === 60) return;
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
    if (this.state.timeMin === 60) return;
    this.setState({
      timeMin: this.state.timeMin + 1,
      timeSec: 0
    });
  };
  decrementTime = () => {
    if (this.state.timeMin === 1) return;
    this.setState({
      timeMin: this.state.timeMin - 1,
      timeSec: 0
    });
  };
  startTimer = () => {
    clearInterval(this.breakTime);
    this.setState({ isPaused: false });
    this.time = setInterval(() => {
      if (this.state.timeSec === 0 && this.state.timeMin === 0) {
        this.audioBeep.play();
        this.setState({
          isSession: false,
          timeMin: 25,
          timeSec: 0
        });
        this.startBreak();
        return;
      }
      if (this.state.timeSec === 0) {
        this.setState({
          timeMin: this.state.timeMin - 1,
          timeSec: 60
        });
      }
      this.setState({
        timeSec: this.state.timeSec - 1
      });
    }, 1000);
  };
  stopTimer = () => {
    this.setState({ isPaused: true });
    clearInterval(this.time);
  };
  toggleTimer = () => {
    this.state.isPaused ? this.startTimer() : this.stopTimer();
  };
  renderTimeText = () => {
    const { timeMin, timeSec } = this.state;
    const minutes = timeMin < 10 ? "0" + timeMin : timeMin;
    const seconds = timeSec < 10 ? "0" + timeSec : timeSec;
    return `${minutes}:${seconds}`;
  };
  startBreak = () => {
    clearInterval(this.time);
    this.breakTime = setInterval(() => {
      if (this.state.breakSec === 0 && this.state.breakMin === 0) {
        this.audioBeep.play();
        this.setState({
          isSession: true,
          breakMin: 5,
          breakSec: 0
        });
        this.startTimer();
        return;
      }
      if (this.state.breakSec === 0) {
        this.setState({
          breakMin: this.state.breakMin - 1,
          breakSec: 60
        });
      }
      this.setState({
        breakSec: this.state.breakSec - 1
      });
    }, 1000);
  };
  stopBreak = () => {
    this.setState({ isPaused: true });
    clearInterval(this.breakTime);
  };
  toggleBreak = () => {
    this.state.isPaused ? this.startBreak() : this.stopBreak();
  };
  renderBreakText = () => {
    const { breakMin, breakSec } = this.state;
    const minutes = breakMin < 10 ? "0" + breakMin : breakMin;
    const seconds = breakSec < 10 ? "0" + breakSec : breakSec;
    return `${minutes}:${seconds}`;
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
        <Timer
          isSession={this.state.isSession}
          reset={this.reset}
          renderTimeText={this.renderTimeText}
          renderBreakText={this.renderBreakText}
          toggleTimer={this.toggleTimer}
          toggleBreak={this.toggleBreak}
        />
        <audio
          id="beep"
          src="https://goo.gl/65cBl1"
          ref={audio => {
            this.audioBeep = audio;
          }}
        ></audio>
      </AppWrapper>
    );
  }
}

export default App;
