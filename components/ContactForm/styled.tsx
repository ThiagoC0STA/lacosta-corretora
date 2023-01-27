import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const ContactComponent = styled.div`
  width: 70vw;
  height: 80vh;
  background-color: #fefefe;
  display: flex;
  align-items: start;
  justify-content: space-between;
  border-radius: 15px;
  animation: ${fadeIn} 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);

  form {
    width: 40vw;
    padding: 8vh 3vw;

    .inputs {
      margin-top: 40px;
      display: flex;
      width: 100%;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 20px 30px;
      width: 100%;

      input,
      textarea {
        border: 1px solid rgb(219, 219, 219);
        font-size: 1rem;
        padding: 0.8rem;
        border-radius: 0.4rem;
        background-color: rgb(238, 238, 238);
      }

      textarea {
        max-height: 120px;
        max-width: 485px;
      }

      label {
        font-size: 0.85rem;
        color: var(--b10);
      }

      input {
        transition: all 0.2s ease 0s;
      }

      div {
        display: flex;
        flex-direction: column;
      }
    }

    button {
      background: var(--b2);
      margin-left: 21.3vw;
      border-radius: 8px;
      padding: 1.7vh 3vw;
      margin-top: 50px;
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

    h1 {
      color: var(--b3);
      font-weight: 600;
      font-size: 2.3rem;
    }

    p {
      margin-top: -20px;
      font-weight: 300;
      color: var(--g7);
    }
  }

  figure {
    height: 80vh;
    width: 30vw;
    margin: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0 15px 15px 0;
  }
`;
