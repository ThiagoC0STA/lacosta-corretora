import styled from "styled-components";

export const InsurersSection = styled.section`
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 2.5rem;

    ::after {
      content: "";
      width: 100px;
      height: 1px;
      background-color: var(--g10);
      position: absolute;
      margin: 60px 0 0 -102px;
    }
  }

  p {
    font-size: 1rem;
    color: var(--g7);
    font-weight: 300;
    margin-top: -4vh;
  }
`;

export const InsurersCaroussel = styled.div`
  width: 100%;

  figure {
    margin-left: 0.9vw;
    width: 12.5vw;
    height: 18.5vh;
    background-color: #fcfcfc;
    border-radius: 8px;
    box-shadow: 0px 3px 7px rgba(53, 57, 60, 0.16);

    img {
      width: auto;
      height: auto;
      object-fit: contain;
    }
  }
`;
