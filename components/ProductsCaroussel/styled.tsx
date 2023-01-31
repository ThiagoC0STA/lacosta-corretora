import styled from "styled-components";

export const ProductsCarousselComponent = styled.section`
  padding: 0 4vw 0 4.8vw;
  width: 100%;
  margin-top: -40px;

  .slick-dots {
    bottom: -8vh;
  }

  @media (max-width: 800px) {
    .slick-dots {
      bottom: -2vh;
    }

    .slick-dots li button:before {
      font-size: 5px;
    }
  }
`;

export const Card = styled.div`
  height: 200px;
  margin-left: 2vw;
  border-radius: 8px;

  div {
    position: absolute;
    padding: 30px 2vw 10px 2vw;
    gap: 12px;
    width: 25vw;
    height: 190px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    background: #f6f7f8;
    box-shadow: 0px 4px 5px rgba(0, 28, 56, 0.341);
    border-radius: 8px;

    p {
      color: #000000;
      letter-spacing: 0.002em;
      margin: 0;
    }

    p:nth-child(1) {
      font-weight: 600;
      font-size: 1.1rem;

      strong {
        color: var(--b3);
      }
    }

    p:nth-child(2) {
      font-weight: 400;
      font-size: 0.7rem;
    }
  }

  @media (max-width: 900px) {
    height: 170px;

    div {
      width: 28vw;
      height: 160px;
      gap: 8px;

      p:nth-child(1) {
        font-size: 1rem;
      }

      p:nth-child(2) {
        font-size: 0.7rem;
      }
    }
  }

  @media (max-width: 800px) {
    height: 160px;

    div {
      height: 150px;

      p:nth-child(1) {
        font-size: 0.85rem;
      }

      p:nth-child(2) {
        font-size: 0.6rem;
      }
    }
  }

  @media (max-width: 650px) {
    height: 150px;

    div {
      height: 150px;
      width: 40vw;

      p:nth-child(1) {
        font-size: 0.7rem;
      }

      p:nth-child(2) {
        font-size: 0.5rem;
      }
    }
  }

  @media (max-width: 500px) {
    height: 120px;

    div {
      height: 120px;
      padding: 20px 2vw 10px 2vw;

      p:nth-child(1) {
        font-size: 0.6rem;
      }

      p:nth-child(2) {
        font-size: 0.4rem;
      }
    }
  }

  @media (max-width: 420px) {
    height: 100px;

    div {
      height: 90px;

      p:nth-child(1) {
        font-size: 0.5rem;
      }

      p:nth-child(2) {
        font-size: 0.3rem;
      }
    }
  }

  @media (max-width: 400px) {
    height: 110px;

    div {
      height: 100px;
      width: 40vw;
    }
  }
`;
