import styled from 'styled-components';

export const Wrapper = styled.figure`
  background-color: ${({ theme }) => theme.colors.white[100]};
  padding: 0.25rem 0.375rem;
  border-radius: 0.25rem;

  p {
    color: ${({ theme }) => theme.colors.black[100]};
    font-size: 0.625rem;
    font-weight: 500;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}px) {
    padding: 0.375rem 0.5rem;

    p {
      color: ${({ theme }) => theme.colors.black[100]};
      font-size: 1rem;
    }
  }
`;
