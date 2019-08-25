import React, { Component } from "react";
import styled from "styled-components";

const TimerWrapper = styled.div`
  width: 220px;
  font-size: 2.7rem;
  margin: 4vh auto 0 auto;
  padding: 10px;
  border: 5px solid #80cbc4;
  border-radius: 30%;

  #time-left {
    display: block;
  }
`;

const ButtonsWrapper = styled.div`
  margin-top: 4vh;
  
  button{
    margin-left: 15px;
    font-size: 1.7rem;
    color:#fff;
    background-color:#00695c;
    cursor: pointer;
  }
`;

export class Timer extends Component {
  static defaultProps={
    min:25,
    sec:0
  }
  render() {
    const {isSession}=this.props;
    return (
      <div>
        <TimerWrapper>
          <span id="timer-label">{isSession? 'Session' : 'Break'}</span>
          <span id="time-left">{isSession? this.props.renderTimeText() : this.props.renderBreakText()}</span>
        </TimerWrapper>
        <ButtonsWrapper>
          <button id='start_stop' onClick={()=>{isSession?this.props.toggleTimer():this.props.toggleBreak()}}><i className="fas fa-play"></i><i className="fas fa-pause"></i></button>
          <button id='reset' onClick={()=>{this.props.reset()}}><i className="fas fa-sync-alt"></i></button>
        </ButtonsWrapper>
      </div>
    );
  }
}

export default Timer;
