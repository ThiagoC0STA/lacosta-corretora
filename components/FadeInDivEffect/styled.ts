import styled from "styled-components";

export const FadeInDiv = styled.div<{ show: boolean }>`
  opacity: 0;
  transition: opacity 0.5s ease-in 0.5s;

  ${({ show }) =>
    show &&
    `
    opacity: 1;
  `}
`;
