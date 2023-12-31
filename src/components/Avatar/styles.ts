import styled from 'styled-components';

export const Wrapper = styled.figure`
  --_dimensions: 2.5rem;
  height: var(--_dimensions);
  width: var(--_dimensions);
  border-radius: 50%;
  overflow: hidden;

  img {
    height: var(--_dimensions);
    width: var(--_dimensions);
    object-fit: cover;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}px) {
    --_dimensions: 4rem;
  }
`;
