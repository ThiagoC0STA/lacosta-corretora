import styled from "styled-components";

export const BannerComponent = styled.section`
  margin-top: 25vh;

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
`;
