import styled from 'styled-components';

export const Wrapper = styled.figure`
  --_dimensions: 2.5rem;
  background-color: red;
  height: var(--_dimensions);
  width: var(--_dimensions);
  border-radius: 50%;
  overflow: hidden;

  img {
    height: var(--_dimensions);
    width: var(--_dimensions);
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}px) {
    --_dimensions: 4rem;
  }
`;
