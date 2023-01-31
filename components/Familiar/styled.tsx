import styled from "styled-components";

export const FamiliarSection = styled.section`
  margin-top: 230px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  scroll-margin-top: 13em !important;

  figure {
    width: 40vw;

    img {
      border-radius: 10px;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 800px) {
    margin-top: 170px;
  }

  @media (max-width: 600px) {
    margin-top: 70px;
  }

  @media (max-width: 300px) {
    margin-top: 55px;
  }
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  p {
    max-width: 550px;
  }

  p:nth-child(1) {
    font-weight: 300;
    font-size: 0.8rem;
    color: var(--g7);
  }

  p:nth-child(3) {
    margin-top: -0.8vh;
    font-weight: 400;
    font-size: 0.8rem;
    color: var(--g10);
  }

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 2.2rem;
    margin-top: -1.8vh;
  }

  div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 8px;

    h3:first-child {
      color: #1c1c1c;
    }

    h3:last-child {
      color: var(--b2);
    }
  }

  div:nth-child(4) {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 5vh;

    button {
      border-radius: 8px;
      font-weight: 600;
      font-size: 0.8rem;
      padding: 10px 36px;
      border: 2px solid var(--b3);
      transition: all ease 0.4s;
      cursor: pointer;
    }

    button:first-child {
      background-color: var(--b3);
      color: var(--g1);

      :hover {
        background-color: transparent;
        color: var(--b3);
      }
    }

    button:last-child {
      background-color: transparent;
      color: var(--b3);

      :hover {
        background-color: var(--b3);
        color: var(--g1);
      }
    }
  }

  @media (max-width: 800px) {
    p:nth-child(1),
    p:nth-child(3) {
      font-size: 0.7rem;
    }

    h3 {
      font-size: 1.8rem;
    }

    div:nth-child(4) {
      button {
        font-size: 0.6rem;
      }
    }
  }

  @media (max-width: 600px) {
    p:nth-child(1),
    p:nth-child(3) {
      font-size: 0.6rem;
    }

    h3 {
      font-size: 1.3rem;
    }

    div:nth-child(4) {
      button {
        font-size: 0.5rem;
        padding: 8px 30px;
        margin-top: 0;
      }
    }
  }

  @media (max-width: 360px) {
    p:nth-child(1),
    p:nth-child(3) {
      font-size: 0.5rem;
    }

    h3 {
      font-size: 1rem;
    }

    div:nth-child(4) {
      margin-top: 15px;

      button {
        font-size: 0.4rem;
        padding: 6px 25px;
        border: 1px solid var(--b3);
      }
    }
  }
`;
