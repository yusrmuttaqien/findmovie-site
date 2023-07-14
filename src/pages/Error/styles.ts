import styled from 'styled-components';

export const Wrapper = styled.main`
  display: grid;
  height: 100vh;
  place-items: center;
  font-weight: 600;

  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}px) {
    font-size: 2rem;
  }
`;
