import styled from 'styled-components';
import SB from 'components/SearchBox';
import { Discover as D } from 'assets/svgs';

export const Wrapper = styled.main`
  --_iconHeight: 7.4375rem;

  header {
    position: relative;
    padding: 0 ${({ theme }) => theme.space.x.mobile} calc(var(--_iconHeight) / 2 + 1rem);
    margin-bottom: calc(var(--_iconHeight) / 2 + 1rem);
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 2rem;
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.colors.white[50]};
    height: calc(100vh - var(--_iconHeight) / 2 - 1.25rem);
    min-height: calc(var(--_iconHeight) * 2 + 1.25rem);

    #title-wrapper {
      h1 {
        font-size: 4.1875rem;
        line-height: 92%;
        word-spacing: 100vw;
      }

      p {
        font-size: 1rem;
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}px) {
    --_iconHeight: 17.5rem;

    header {
      padding: 0 ${({ theme }) => theme.space.x.desktop} calc(var(--_iconHeight) / 2 + 1rem);
      flex-direction: row;
      min-height: calc(var(--_iconHeight) * 1.5 + 1.25rem);

      #title-wrapper {
        height: max-content;
        align-self: flex-end;

        h1 {
          font-size: 11.15rem;
        }

        p {
          font-size: 1.75rem;
        }
      }
    }
  }
`;

export const SearchBox = styled(SB)`
  align-self: center;

  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}px) {
    align-self: end;
  }
`;

export const Discover = styled(D)`
  background-color: ${({ theme }) => theme.colors.black[100]};
  height: var(--_iconHeight);
  position: absolute;
  bottom: calc(-1 * var(--_iconHeight) / 2);
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;

  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}px) {
    left: unset;
    right: ${({ theme }) => theme.space.x.desktop};
    transform: none;
  }
`;
