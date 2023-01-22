import styled from "styled-components";

export const MainComponent = styled.main`
  height: 80vh;
  width: 100%;
  z-index: 0;
  position: relative;

  div {
    background: linear-gradient(
      90deg,
      rgba(1, 5, 15, 0.9) 0%,
      rgba(1, 5, 15, 0.8) 29.69%,
      rgba(1, 5, 15, 0.7) 63.01%,
      rgba(1, 5, 15, 0.16) 100%
    );
    position: absolute;
    z-index: 0;
    height: 75vh;
    width: 100%;
    color: var(--g1);
    padding: 15vh 7vw;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  h1 {
    font-size: var(--h1);
    color: var(--g1);
    font-style: normal;
    font-weight: 700;

    ::before {
      content: "";
      width: 100px;
      height: 1px;
      background-color: var(--g1);
      position: absolute;
      margin: 60px 0 0 20px;
    }
  }

  h2 {
    font-size: var(--p1);
    max-width: 43vw;
    font-weight: 400;
  }

  button {
    background: var(--b5);
    font-size: var(--p2);
    color: var(--g1);
    border-radius: 10px;
    border: none;
    width: 200px;
    height: 45px;
    font-weight: 600;
    cursor: pointer;
    transition: all ease 0.4s;

    :hover {
      background: var(--b3);
      box-shadow: 0 0 10px #286ad4b5;
    }
  }

  img {
    height: auto;
    width: 100%;
    object-fit: contain;
    position: absolute;
  }
`;
