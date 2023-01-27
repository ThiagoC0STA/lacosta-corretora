import styled from "styled-components";

export const MainComponent = styled.main`
  height: 80vh;
  width: 100%;
  z-index: 0;
  position: relative;
  margin-top: 10vh;

  div {
    background: linear-gradient(
      90deg,
      rgba(24, 49, 69, 0.6) 0%,
      rgba(24, 49, 69, 0.55) 65%,
      rgba(24, 49, 69, 0.25) 100%
    );
    position: absolute;
    z-index: 0;
    height: 79vh;
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
  }

  h2 {
    font-size: var(--p1);
    max-width: 43vw;
    font-weight: 400;
    margin-top: -20px;
  }

  button {
    background: var(--b2);
    font-size: var(--p2);
    color: #ffffff;
    border-radius: 10px;
    letter-spacing: 1px;
    border: none;
    width: 15vw;
    height: 6vh;
    font-weight: 700;
    cursor: pointer;
    transition: all ease 0.4s;

    :hover {
      background: var(--b1);
    }
  }

  img {
    height: auto;
    width: 100%;
    object-fit: contain;
    position: absolute;
  }
`;
