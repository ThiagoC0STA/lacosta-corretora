import styled from "styled-components";

export const FadeInDiv = styled.div<{ show: boolean }>`
  opacity: 0;
  transform: translateY(5%);
  transition: all 0.5s ease-in 0.7s;

  ${({ show }) =>
    show &&
    `
    opacity: 1;
    transform: translateX(0);
  `}
`;
