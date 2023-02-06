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
    margin-top: -70px;
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

  @media (max-width: 500px) {
    h1 {
      font-size: 50px;
    }

    p:nth-child(2) {
      font-size: 13px;
      margin-top: -45px;
    }

    p:nth-child(3) {
      font-size: 30px;
      margin: 150px 0 0 300px;
    }
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 40px;
    }

    p:nth-child(2) {
      font-size: 11px;
      margin-top: -40px;
      letter-spacing: 4.6px;
      margin-left: 4px;
    }

    p:nth-child(3) {
      font-size: 22px;
      margin: 110px 0 0 240px;
    }
  }

  @media (max-width: 320px) {
    p:nth-child(3) {
      font-size: 20px;
      margin: 110px 0 0 220px;
    }
  }

  @media (max-width: 280px) {
    h1 {
      font-size: 35px;
    }

    p:nth-child(2) {
      font-size: 9px;
      margin-top: -35px;
    }

    p:nth-child(3) {
      font-size: 18px;
      margin: 100px 0 0 200px;
    }
  }
`;
