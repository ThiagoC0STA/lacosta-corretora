import styled from "styled-components";

export const MainComponent = styled.main`
  div {
    background: linear-gradient(
      90deg,
      rgba(1, 5, 15, 0.9) 0%,
      rgba(1, 5, 15, 0.95) 38.34%,
      rgba(1, 5, 15, 0.8) 66.04%,
      rgba(1, 5, 15, 0.38) 82.06%,
      rgba(1, 5, 15, 0.16) 100%
    );
    position: absolute;
    height: 85vh;
    width: 100%;
    z-index: 1;
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
  }

  p {
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
    height: 85vh;
    width: 100%;
    object-fit: cover;
    position: absolute;
    z-index: 0;
  }
`;
