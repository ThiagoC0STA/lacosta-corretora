import styled from "styled-components";

export const FooterComponent = styled.footer`
  height: 90px;
  background-color: #e5e8ec;
  padding: 0 4vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-weight: 300;
    font-size: 0.8rem;
    color: var(--g10);
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    button {
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #757c84;
      border-radius: 4px;
      border: none;
      transition: all 0.4s ease;
      cursor: pointer;

      :hover {
        background: #7b87b4;
      }
    }
  }

  @media (max-width: 500px) {
    p {
      font-size: 0.6rem;
    }

    div {
      button {
        width: 30px;
        height: 30px;

        img {
          width: 12px;
          height: 12px;
        }
      }
    }
  }

  @media (max-width: 390px) {
    height: 70px;

    p {
      font-size: 0.5rem;
    }

    div {
      gap: 6px;

      button {
        width: 25px;
        height: 25px;

        img {
          width: 10px;
          height: 10px;
        }
      }
    }
  }

  @media (max-width: 320px) {
    p {
      font-size: 0.45rem;
    }

    div {
      gap: 6px;

      button {
        width: 20px;
        height: 20px;

        img {
          width: 8px;
          height: 8px;
        }
      }
    }
  }
`;
