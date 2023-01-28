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
      letter-spacing: 4px;
      margin-bottom: 4vh;
      color: var(--b8);
      font-weight: bold;
      font-size: 2rem;
    }

    p {
      position: absolute;
      font-weight: 500;
      font-size: 0.64rem;
      letter-spacing: 3px;
      margin-top: -5.2vh;
      margin-left: 2px;
      color: var(--b8);
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 35px;
    list-style: none;
  }

  .close {
    color: #fff;
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 1.3rem;
  }

  .mobile {
    position: absolute;
    color: #fff;
    right: 0;
    z-index: 99;
    padding-top: 30vh;
    top: -16px;
    flex-direction: column;
    width: 40vw;
    height: 110vh;
    background-color: #000000;
    box-shadow: 0 10px 7px 0 #030303;
    transition: all ease 0.4s;
  }

  a {
    font-weight: 500;
    font-size: 0.9rem;
    cursor: pointer;
  }

  li:last-child {
    a {
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
  }
`;
