import styled from "styled-components";

export const BannerComponent = styled.section`
  margin-top: 20vh;

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
    justify-content: start;
    padding-top: 5vh;
    color: var(--g10);

    h3 {
      font-weight: 600;
      font-size: 2rem;
    }

    p {
      font-weight: 400;
      font-size: 1rem;
      max-width: 40vw;
      text-align: center;
    }

    button {
      background: var(--b2);
      border-radius: 8px;
      padding: 1.9vh 6.25vw;
      margin-top: 6vh;
      font-weight: 600;
      font-size: 0.9rem;
      color: var(--g1);
      border: 2px solid var(--b2);
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
