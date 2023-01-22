import styled from "styled-components";

export const ProductsCarousselComponent = styled.section`
  padding: 0 4vw 0 4.8vw;
  width: 100%;
  margin-top: -10vh;

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

  h3 {
    position: absolute;
    margin: 5vh 0 11px 3vw;
    font-weight: 600;
    font-size: 1.3rem;
    line-height: 32px;
    letter-spacing: 0.002em;
    color: #fff;
  }

  p {
    position: absolute;
    margin: 11vh 0 11px 3vw;
    font-weight: 400;
    font-size: 0.83rem;
    max-width: 20vw;
    line-height: 32px;
    letter-spacing: 0.002em;
    color: #fff;
  }

  div {
    position: absolute;
    width: 25vw;
    height: 28vh;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 8px;
  }
`;
