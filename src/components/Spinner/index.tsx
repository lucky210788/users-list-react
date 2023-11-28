import React from 'react';
import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #767676;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: ${spinAnimation} 1s linear infinite;
  position: absolute;
  left: 50%;
  top: 50%;
`;

const Spinner: React.FC = () => {
  return <SpinnerWrapper />;
};

export default Spinner;
