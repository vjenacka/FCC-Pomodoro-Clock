import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-block;
  margin-left: 30px;
  font-size: 1.7rem;

  #session-length{
      display: inline-block;
      margin: 0 10px;
  }

  #session-increment, #session-decrement{
    cursor: pointer;
  }
`;

const SessionLength = ({timeMin,incrementTime,decrementTime}) => {
  return (
    <Wrapper>
      <span id="session-label">Session Length</span>
      <div>
        <i className="fas fa-arrow-up" id='session-increment' onClick={()=>{incrementTime()}}></i>
        <span id='session-length'>{timeMin}</span>
        <i className="fas fa-arrow-down" id='session-decrement' onClick={()=>{decrementTime()}}></i>
      </div>
    </Wrapper>
  );
};


export default SessionLength;
