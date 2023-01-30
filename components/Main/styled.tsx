import styled from "styled-components";

export const MainComponent = styled.main`
  height: 520px;
  width: 100%;
  z-index: 0;
  position: relative;
  margin-top: 63px;

  div {
    background: linear-gradient(
      90deg,
      rgba(24, 49, 69, 0.6) 0%,
      rgba(24, 49, 69, 0.55) 65%,
      rgba(24, 49, 69, 0.25) 100%
    );
    position: absolute;
    z-index: 0;
    height: 520px;
    width: 100%;
    color: var(--g1);
    padding: 15vh 7vw;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  h1 {
    font-size: 2rem;
    color: var(--g1);
    font-style: normal;
    font-weight: 700;
  }

  h2 {
    font-size: 0.8rem;
    max-width: 45vw;
    font-weight: 400;
    margin-top: -25px;
  }

  button {
    background: var(--b2);
    font-size: 0.7rem;
    color: #ffffff;
    border-radius: 10px;
    letter-spacing: 1px;
    border: none;
    max-width: 16vw;
    padding: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all ease 0.4s;

    :hover {
      background: var(--b1);
    }
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 1.8rem;
    }

    h2 {
      font-size: 0.75rem;
      max-width: 60vw;
    }

    button {
      font-size: 0.6rem;
    }
  }

  @media (max-width: 800px) {
    height: 360px;

    div {
      height: 360px;
      padding: 40px 7vw;
    }

    h1 {
      font-size: 1.7rem;
    }

    h2 {
      font-size: 0.7rem;
      max-width: 70vw;
    }

    button {
      font-size: 0.5rem;
    }
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 0.65rem;
      max-width: 70vw;
    }

    button {
      font-size: 0.4rem;
    }
  }

  @media (max-width: 600px) {
    height: 300px;

    div {
      height: 300px;
      padding: 50px 7vw;
    }

    h1 {
      font-size: 1.3rem;
    }

    h2 {
      font-size: 0.6rem;
    }

    button {
      font-size: 0.4rem;
      max-width: 20vw;
    }
  }

  @media (max-width: 500px) {
    height: 240px;

    div {
      height: 240px;
      padding: 30px 7vw;
    }

    h1 {
      font-size: 1.1rem;
    }

    h2 {
      font-size: 0.5rem;
    }

    button {
      font-size: 0.35rem;
      padding: 8px;
      border-radius: 5px;
    }
  }

  @media (max-width: 430px) {
    height: 210px;

    div {
      height: 210px;
    }

    h1 {
      font-size: 0.9rem;
    }

    h2 {
      font-size: 0.45rem;
      max-width: 62vw;
    }

    button {
      font-size: 0.3rem;
      max-width: 25vw;
    }
  }

  @media (max-width: 360px) {
    h1 {
      font-size: 0.8rem;
    }

    h2 {
      font-size: 0.4rem;
      max-width: 70vw;
    }

    button {
      font-size: 0.25rem;
      max-width: 36vw;
    }
  }

  @media (max-width: 305px) {
    h1 {
      font-size: 0.75rem;
    }

    h2 {
      font-size: 0.36rem;
      max-width: 80vw;
    }

    button {
      font-size: 0.26rem;
    }
  }
`;
