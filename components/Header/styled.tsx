import styled from "styled-components";

export const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4vw;
  background-color: #fcfcfc;

  a,
  button {
    font-size: var(--a);
  }

  a {
    font-weight: 500;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 35px;
  }

  button {
    display: flex;
    align-items: center;
    padding: 10px 20px;
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
`;
