import styled from "styled-components";

export const DepoisitionsSection = styled.section`
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 2.5rem;

    ::before {
      content: "";
      width: 100px;
      height: 1px;
      background-color: var(--g10);
      position: absolute;
      margin: 60px 0 0 2px;
    }
  }

  p {
    font-size: 1rem;
    color: var(--g7);
    font-weight: 300;
    margin-top: -4vh;
  }
`;

export const DepoisitionsCaroussel = styled.div`
  width: 100%;
`;

export const Card = styled.div`
  height: 70vh;
  margin-top: 20vh;

  .bluechat {
    position: absolute;
    margin-left: -24vw;
    margin-top: -3vh;
  }

  div {
    box-shadow: 0px 3px 7px rgba(33, 37, 41, 0.16);
    border-radius: 8px;
    width: 24vw;
    margin-left: 2vw;
    height: 48vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    color: var(--g10);
    padding: 0 3vw;
    text-align: center;

    figure {
      width: 5.625vw;
      height: 11.1vh;
      filter: drop-shadow(0px 2px 7px rgba(0, 0, 0, 0.24));
      position: absolute;
      margin-top: -7vh;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }

    h4 {
      margin-top: 10vh;
      font-weight: 600;
      font-size: 1.2rem;
    }

    h5 {
      font-weight: 300;
      font-size: 0.8rem;
      color: var(--g6);
      margin: -3.2vh 0 9vh 0;
    }

    p {
      font-weight: 300;
      font-size: 0.88rem;
    }
  }
`;
