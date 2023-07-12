import styled from 'styled-components';
import { SearchIcon as SI } from 'assets/svgs';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  gap: 1.25rem;

  input {
    width: 11.875rem;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.white[100]};
    font-size: 1.0625rem;
    line-height: 1.5;

    &::placeholder {
      color: ${({ theme }) => theme.colors.white[50]};
    }

    @media screen and (min-width: ${({ theme }) => theme.screen.desktop}px) {
      font-size: 1.3rem;
      width: 15rem;
    }
  }
`;

export const SearchIcon = styled(SI)`
  font-size: 1.25rem;
  cursor: pointer;

  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}px) {
    font-size: 2rem;
  }
`;
