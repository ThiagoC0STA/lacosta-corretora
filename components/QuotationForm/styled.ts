import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const FormDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  animation: ${fadeIn} 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
`;

export const FormComponent = styled.div`
  width: 60vw;
  height: 80vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #fff;
  border-radius: 15px;
  animation: ${fadeIn} 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);

  form {
    display: flex;
    flex-direction: column;
    width: 30vw;
    padding: 2vh 3vw;

    h3 {
      color: var(--b3);
      font-weight: 600;
      font-size: 2.3rem;
    }

    p {
      font-weight: 300;
      color: var(--g7);
    }

    p:nth-child(2) {
      position: absolute;
      margin-top: -16vh;
      margin-left: 25vw;
      font-size: 0.8rem;
    }

    p:nth-child(3) {
      margin: -30px 0 40px 0;

      strong {
        color: #23c71c;
      }
    }
  }

  figure {
    height: 80vh;
    width: 30vw;
    margin: 0;

    ::before {
      content: "";
      height: 80vh;
      width: 30vw;
      position: absolute;
      background-color: #4e90d129;
      border-radius: 0 15px 15px 0;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0 15px 15px 0;
  }

  textarea,
  select,
  input {
    border: 1px solid rgb(219, 219, 219);
    width: 100%;
    font-size: 0.85rem;
    padding: 0.8rem;
    border-radius: 0.4rem;
    background-color: rgb(238, 238, 238);
    margin-bottom: 15px;

    :focus {
      box-shadow: 0 0 0 0;
      outline: 0;
      border: 1px solid rgb(51, 121, 161);
    }
  }

  textarea {
    max-height: 120px;
    max-width: 485px;
  }

  input,
  label {
    display: block;
  }
`;

export const LabelsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 54vh;

  label {
    font-size: 0.85rem;
    font-weight: 500;
    margin-bottom: 5px;
  }

  div:nth-child(2) {
    display: flex;
    gap: 15px;

    button {
      background: var(--b2);
      border-radius: 8px;
      padding: 1.7vh 2vw;
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
  }
`;
