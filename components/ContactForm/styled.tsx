import styled from "styled-components";

export const ContactComponent = styled.div`
  width: 70vw;
  height: 80vh;
  background-color: #fefefe;
  display: flex;
  align-items: start;
  justify-content: space-between;
  border-radius: 15px;

  form {
    width: 35vw;
    padding: 8vh 4vw;

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
