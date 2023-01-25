import styled, { keyframes } from "styled-components";

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-40%);
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(40%);
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${fadeOut} 2.5s 4s ease-out;

  h1 {
    font-size: 72px;
    animation: ${slideInFromLeft} 2s ease-in-out, ${fadeOut} 2.5s 4s ease-out;
    letter-spacing: 4px;
    font-weight: bold;
    color: #fffffff6;
  }

  p:nth-child(2) {
    font-size: 21px;
    animation: ${slideInFromRight} 2s ease-in-out, ${fadeOut} 2.5s 4s ease-out;
    margin-top: -8vh;
    margin-left: 6px;
    letter-spacing: 6px;
    font-weight: 500;
    color: #fffffff6;
  }

  p:nth-child(3) {
    animation: ${fadeIn} 1s ease-in, ${fadeOut} 2.5s 4s ease-out;
    font-family: "Alex Brush", cursive;
    color: #4e90d1f5;
    transform: rotate(-15deg);
    margin: 203px 0 0 360px;
    font-size: 40px;
    position: absolute;
  }
`;
