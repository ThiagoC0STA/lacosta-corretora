import styled from "styled-components";

export const HeaderComponent = styled.header`
  position: fixed;
  z-index: 99;
  right: 0;
  left: 0;
  top: 0;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4vw;
  background-color: #fcfcfc;

  .logo {
    h1 {
      letter-spacing: 3px;
      color: var(--b8);
      font-weight: bold;
      font-size: 1.7rem;
    }

    p {
      position: absolute;
      font-weight: 500;
      font-size: 0.58rem;
      letter-spacing: 2px;
      margin-top: -28px;
      margin-left: 2px;
      color: var(--b8);
    }
  }

  nav {
    display: flex;
    align-items: center;
    gap: 35px;
  }

  .mobile {
    position: absolute;
    color: #fff;
    right: 0;
    z-index: 99;
    padding-top: 30vh;
    top: -16px;
    width: 40vw;
    height: 110vh;
    background-color: #000000;
    box-shadow: 0 10px 7px 0 #030303;
    transition: all ease 0.2s;

    .close {
      color: #fff;
      position: absolute;
      right: 2.5vw;
      top: 7vh;
      font-size: 1.5rem;
    }

    .bars {
      position: absolute;
      right: 6vw;
      color: #000;
    }

    nav {
      flex-direction: column;
    }
  }

  a {
    font-weight: 500;
    font-size: 0.73rem;
    cursor: pointer;
  }

  a:last-child {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;
    background-color: #258406;
    color: var(--g1);
    border-radius: 25px;
    border: none;
    cursor: pointer;
    color: #fff;
    font-weight: 600;
    transition: all 0.4s ease;

    :hover {
      background-color: #42ca18;
    }
  }

  @media (max-width: 500px) {
    .mobile {
      width: 50vw;

      .close {
        font-size: 1.1rem;
        right: 4.5vw;
      }
    }

    a {
      font-size: 0.6rem;
    }

    .logo {
      h1 {
        font-size: 1.4rem;
      }

      p {
        font-size: 0.46rem;
        margin-top: -22px;
      }
    }
  }

  @media (max-width: 270px) {
    .mobile {
      width: 60vw;
    }
  }
`;
