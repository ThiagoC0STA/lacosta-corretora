import styled, { keyframes } from "styled-components";

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
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
  align-items: center;
  justify-content: center;
  gap: 10px;
  animation: ${fadeOut} 3s 2s ease-out;

  h1,
  p {
    color: #fff;
    font-weight: bold;
    text-align: center;
  }

  h1 {
    font-size: 72px;
    animation: ${slideInFromLeft} 3s, ${fadeOut} 4s 2s ease-out;
  }

  p {
    font-size: 30px;
    animation: ${slideInFromRight} 3s, ${fadeOut} 4s 2s ease-out;
    margin-top: 13vh;
  }
`;
