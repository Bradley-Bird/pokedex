import styled from 'styled-components';

export const pokeDiv = styled.div`
  background-position: ${(beforeStyles) => beforeStyles};
  &:hover::before {
    background-size: 300% 300%;
    background-image: linear-gradient(
      115deg,
      transparent 0%,
      var(--color1) 25%,
      transparent 47%,
      transparent 53%,
      var(--color2) 75%,
      transparent 100%
    );
    opacity: 0.5;
    filter: brightness(0.5) contrast(1);
    z-index: 1;
  }
`;
