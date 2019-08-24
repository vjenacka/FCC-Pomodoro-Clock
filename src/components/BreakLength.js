import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-block;
  margin-left: 30px;
  font-size: 1.7rem;

  #break-length {
    display: inline-block;
    margin: 0 10px;
  }

  #break-increment,
  #break-decrement {
    cursor: pointer;
  }
`;

const BreakLength = ({ breakMin, incrementBreak, decrementBreak }) => {
  return (
    <Wrapper>
      <span id="break-label">Break Length</span>
      <div className="length-timer">
        <i
          className="fas fa-arrow-up"
          id="break-increment"
          onClick={() => {
            incrementBreak();
          }}
        ></i>
        <span id="break-length">{breakMin}</span>
        <i
          className="fas fa-arrow-down"
          id="break-decrement"
          onClick={() => {
            decrementBreak();
          }}
        ></i>
      </div>
    </Wrapper>
  );
};

export default BreakLength;
