import styled from "styled-components";

export const InsurersSection = styled.section`
  margin-top: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-margin-top: 13em !important;

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 2.5rem;

    ::after {
      content: "";
      width: 100px;
      height: 1px;
      background-color: var(--g10);
      position: absolute;
      margin: 60px 0 0 -102px;
    }
  }

  p {
    font-size: 0.9rem;
    color: var(--g7);
    font-weight: 300;
    margin-top: -35px;
  }

  @media (max-width: 800px) {
    margin-top: 170px;

    h3 {
      font-size: 2.2rem;

      ::after {
        display: none;
      }
    }

    p {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 600px) {
    margin-top: 70px;

    h3 {
      font-size: 1.8rem;
    }

    p {
      font-size: 0.7rem;
      margin-top: -30px;
    }
  }

  @media (max-width: 500px) {
    h3 {
      font-size: 1.6rem;
    }

    .slick-dots li button:before {
      font-size: 5px;
    }

    .slick-dots li button,
    .slick-dots li {
      width: 17px;
    }

    p {
      font-size: 0.6rem;
      margin-top: -25px;
    }
  }

  @media (max-width: 420px) {
    h3 {
      font-size: 1.3rem;
    }

    p {
      font-size: 0.55rem;
    }
  }

  @media (max-width: 330px) {
    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 0.45rem;
      margin-top: -15px;
    }
  }

  @media (max-width: 250px) {
    h3 {
      font-size: 0.9rem;
    }

    p {
      font-size: 0.45rem;
      margin-top: -15px;
    }
  }
`;

export const InsurersCaroussel = styled.div`
  width: 100%;
  margin-top: 20px;

  figure {
    margin-left: 0.9vw;
    width: 12.5vw;
    height: 110px;
    background-color: #fcfcfc;
    border-radius: 8px;
    box-shadow: 0px 3px 7px rgba(53, 57, 60, 0.16);

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  @media (max-width: 800px) {
    figure {
      width: 14.5vw;
    }
  }

  @media (max-width: 730px) {
    figure {
      width: 16vw;
    }
  }

  @media (max-width: 560px) {
    figure {
      width: 20vw;
      height: 90px;
      margin-left: 4vw;
    }
  }

  @media (max-width: 430px) {
    margin-top: 5px;
    figure {
      width: 22vw;
      height: 70px;
      margin-left: 3vw;
    }
  }

  @media (max-width: 330px) {
    figure {
      height: 60px;
    }
  }

  @media (max-width: 270px) {
    figure {
      height: 50px;
    }
  }
`;
