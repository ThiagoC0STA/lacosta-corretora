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
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0px;
  }

  form {
    width: 40vw;
    padding: 10px 3vw 0 3vw;

    .inputs {
      margin-top: 8vh;
      display: grid;
      grid-template-columns: auto auto;
      width: 100%;
      gap: 15px 20px;
      width: 100%;

      .bigbox {
        grid-column-start: 1;
        grid-column-end: 3;
      }

      input,
      textarea {
        border: 1px solid rgb(200, 200, 200);
        font-size: 0.7rem;
        padding: 10px;
        border-radius: 0.4rem;
        background-color: rgb(238, 238, 238);
      }

      textarea {
        max-height: 13vh;
        resize: vertical;
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
      border-radius: 8px;
      padding: 13px 0;
      margin-top: 10px;
      font-weight: 600;
      font-size: 0.9rem;
      color: var(--g1);
      border: 2px solid var(--b2);
      cursor: pointer;
      transition: all ease 0.4s;
      grid-row-start: 4;
      grid-column-start: 2;

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
    margin: 0;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1000px) {
    width: 80vw;

    form {
      width: 80vw;
    }
  }

  @media (max-width: 600px) {
    width: 85vw;

    form {
      width: 85vw;

      h1 {
        font-size: 2rem;
      }

      p {
        margin-top: -20px;
        margin-left: 2px;
        font-size: 0.8rem;
      }

      .inputs {
        margin-top: 30px;

        input,
        textarea {
          font-size: 0.5rem;
          padding: 8px;
        }

        label {
          font-size: 0.75rem;
        }

        button {
          padding: 10px 0;
          font-size: 0.75rem;
        }
      }
    }
  }

  @media (max-width: 400px) {
    form {
      h1 {
        font-size: 1.7rem;
      }

      p {
        margin-top: -20px;
        font-size: 0.7rem;
      }
    }
  }

  @media (max-width: 320px) {
    form {
      h1 {
        font-size: 1.7rem;
      }

      p {
        margin-top: -20px;
        font-size: 0.7rem;
      }

      .inputs {
        input,
        textarea {
          font-size: 0.5rem;
          padding: 5px;
        }

        label {
          font-size: 0.65rem;
        }

        button {
          padding: 7px 0;
          font-size: 0.65rem;
        }
      }
    }
  }
`;
