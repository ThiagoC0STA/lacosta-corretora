import styled from "styled-components";

export const ProductsCarousselComponent = styled.section`
  padding: 0 4vw 0 4.8vw;
  width: 100%;
  margin-top: -6vh;

  .slick-dots {
    bottom: -8vh;
  }

  .slick-dots li button:before {
    font-size: 7px;
  }
`;

export const Card = styled.div`
  width: 25vw;
  height: 28vh;
  margin-left: 2vw;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  p {
    color: #000000;
    position: absolute;
    letter-spacing: 0.002em;
    line-height: 27px;
    max-width: 20vw;
  }

  p:nth-child(1) {
    margin: 5vh 0 11px 3vw;
    font-weight: 600;
    font-size: 1.3rem;
  }

  p:nth-child(2) {
    margin: 11vh 0 11px 3vw;
    font-weight: 400;
    font-size: 0.83rem;
  }

  div {
    position: absolute;
    width: 25vw;
    height: 28vh;
    background: #f6f7f8;
    box-shadow: 0px 4px 5px rgba(0, 28, 56, 0.341);
    border-radius: 8px;
  }
`;
