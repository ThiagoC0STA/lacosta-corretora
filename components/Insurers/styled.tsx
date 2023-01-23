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
    margin-left: 2.2vw;
    width: 150px;
    height: 150px;

    img {
      width: auto;
      height: auto;
      object-fit: contain;
    }
  }
`;
