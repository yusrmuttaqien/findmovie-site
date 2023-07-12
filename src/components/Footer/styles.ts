import styled from 'styled-components';

export const Wrapper = styled.footer`
  padding: 1rem 0;
  border-top: 1px solid;
  border-color: ${({ theme }) => theme.colors.white[50]};
  margin-top: 1.25rem;

  p {
    font-size: 0.75rem;
    font-weight: 200;
    text-align: center;
    color: ${({ theme }) => theme.colors.white[70]};
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}px) {
    margin-top: 2.1875rem;

    p {
      font-size: 1rem;
    }
  }
`;
