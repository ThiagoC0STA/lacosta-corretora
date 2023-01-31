import styled from "styled-components";

export const DepoisitionsSection = styled.section`
  margin-top: 25vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 2.5rem;

    ::before {
      content: "";
      width: 100px;
      height: 1px;
      background-color: var(--g10);
      position: absolute;
      margin: 60px 0 0 2px;
    }
  }

  p {
    font-size: 0.9rem;
    color: var(--g10);
    font-weight: 300;
    margin-top: -35px;
  }

  @media (max-width: 800px) {
    margin-top: 170px;

    h3 {
      font-size: 2.2rem;

      ::before {
        display: none;
      }
    }

    p {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 600px) {
    margin-top: 100px;

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

  @media (max-width: 300px) {
    margin-top: 70px;
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

export const DepoisitionsCaroussel = styled.div`
  width: 100%;
`;

export const Card = styled.div`
  margin-top: 20vh;

  .bluechat {
    position: absolute;
    margin-left: -24vw;
    margin-top: -3vh;
  }

  div {
    box-shadow: 0px 2px 5px rgba(33, 37, 41, 0.16);
    border-radius: 8px;
    background-color: #fcfcfc;
    width: 24vw;
    margin-left: 2vw;
    height: 310px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    color: var(--g10);
    padding: 0 3vw;
    text-align: center;
    margin-bottom: 70px;

    figure {
      width: 70px;
      height: 70px;
      filter: drop-shadow(0px 2px 7px rgba(0, 0, 0, 0.24));
      position: absolute;
      margin-top: -55px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }

    h4 {
      margin-top: 40px;
      font-weight: 600;
      font-size: 1rem;
    }

    h5 {
      font-weight: 300;
      font-size: 0.7rem;
      color: var(--g10);
      margin: -20px 0 80px 0;
    }

    p {
      font-weight: 300;
      font-size: 0.75rem;
    }
  }

  @media (max-width: 900px) {
    div {
      width: 40vw;
    }

    .bluechat {
      margin-left: -40vw;
    }
  }

  @media (max-width: 600px) {
    div {
      margin-left: 13px;
      height: 250px;

      figure {
        width: 60px;
        height: 60px;
        margin-top: -45px;
      }
      h4 {
        font-size: 0.8rem;
      }

      h5 {
        font-size: 0.6rem;
        margin: -17px 0 50px 0;
      }

      p {
        font-size: 0.6rem;
      }
    }
  }

  @media (max-width: 500px) {
    .bluechat {
      margin-left: -82vw;
    }

    div {
      height: 250px;
      width: 82vw;
    }
  }

  @media (max-width: 330px) {
    .bluechat {
      margin-left: -60vw;
      width: 22px;
    }

    div {
      width: 60vw;
      margin-left: 45px;

      figure {
        width: 50px;
        height: 50px;
        margin-top: -35px;
      }
      h4 {
        font-size: 0.7rem;
      }

      h5 {
        font-size: 0.5rem;
        margin: -17px 0 50px 0;
      }

      p {
        font-size: 0.5rem;
      }
    }
  }

  @media (max-width: 300px) {
    margin-top: 70px;

    .bluechat {
      margin-left: -80vw;
      width: 22px;
    }

    div {
      width: 80vw;
      margin-left: 10px;

      figure {
        width: 50px;
        height: 50px;
        margin-top: -35px;
      }
      h4 {
        font-size: 0.7rem;
      }

      h5 {
        font-size: 0.5rem;
        margin: -17px 0 50px 0;
      }

      p {
        font-size: 0.5rem;
      }
    }
  }
`;
