import styled from "styled-components";

export const BannerComponent = styled.section`
  margin-top: 230px;

  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }

  div {
    background-color: rgba(212, 217, 226, 0.27);
    width: 100%;
    height: 50vh;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--g10);

    h3 {
      font-weight: 700;
      font-size: 1.8rem;
      margin: 0;
    }

    p {
      font-weight: 400;
      font-size: 0.8rem;
      max-width: 38vw;
      text-align: center;
    }

    button {
      background: var(--b3);
      border-radius: 8px;
      padding: 10px 50px;
      margin-top: 6vh;
      font-weight: 600;
      font-size: 0.8rem;
      color: var(--g1);
      border: 2px solid var(--b3);
      cursor: pointer;
      transition: all ease 0.4s;

      :hover {
        background-color: transparent;
        color: var(--b7);
        border: 2px solid var(--b7);
      }
    }
  }

  @media (max-width: 800px) {
    margin-top: 170px;
  }

  @media (max-width: 600px) {
    margin-top: 70px;

    img,
    div {
      height: 300px;
    }

    div {
      h3 {
        font-size: 1.3rem;
      }

      p {
        font-size: .6rem;
        max-width: 80vw;
      }

      button {
        font-size: 0.6rem;
      }
    }
  }

  @media (max-width: 450px) {
    img,
    div {
      height: 200px;
    }

    div {
      h3 {
        font-size: 1rem;
      }

      p {
        font-size: .5rem;
        max-width: 90vw;
      }

      button {
        font-size: 0.5rem;
        padding: 6px 40px;
      }
    }
  }

  @media (max-width: 350px) {
    img,
    div {
      height: 170px;
    }

    div {
      h3 {
        font-size: 0.8rem;
      }

      p {
        font-size: .5rem;
        max-width: 95vw;
      }

      button {
        margin-top: 5px;
        font-size: 0.4rem;
        padding: 5px 30px;
      }
    }
  }

  @media (max-width: 300px) {
    margin-top: 80px;
  }

  @media (max-width: 280px) {
    img,
    div {
      height: 140px;
    }

    div {
      h3 {
        font-size: 0.7rem;
      }

      p {
        font-size: .42rem;
        max-width: 97vw;
      }

      button {
        margin-top: 7px;
        font-size: 0.35rem;
        padding: 5px 30px;
      }
    }
  }
`;
