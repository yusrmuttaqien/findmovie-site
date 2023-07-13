import styled from 'styled-components';
import { Link as L } from 'react-router-dom';
import { Read as R } from 'assets/svgs';
import NIDetails from 'assets/nativeSVGs/NoImageDetails.svg?url';

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
    height: calc(100vh - var(--_iconHeight) / 2 - 1rem);
    min-height: calc(var(--_iconHeight) * 3 + 1rem);
    background: url(${NIDetails}) ${({ theme }) => theme.colors.white[100]};
    background-position: top center;
    background-repeat: no-repeat;

    #title-wrapper {
      h1,
      p {
        position: relative;
      }

      h1 {
        font-size: 4.1875rem;
        line-height: 92%;
        word-wrap: break-word;
        z-index: 1;
      }

      p {
        font-size: 1rem;
        z-index: 2;

        span {
          transition: color 0.1s ease-in-out;
        }
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}px) {
    --_iconHeight: 17.5rem;

    header {
      padding: 0 ${({ theme }) => theme.space.x.desktop} calc(var(--_iconHeight) / 2 + 1rem);
      flex-direction: row;
      min-height: calc(var(--_iconHeight) * 1.5 + 1rem);

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

export const Read = styled(R)`
  background-color: ${({ theme }) => theme.colors.black[30]};
  height: var(--_iconHeight);
  position: absolute;
  bottom: calc(-1 * var(--_iconHeight) / 2);
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  border-radius: 45%;
  backdrop-filter: blur(5px);
`;

export const Link = styled(L)`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white[50]};
  text-decoration: none;
  transition: color 0.1s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.white[100]};

    + span {
      color: ${({ theme }) => theme.colors.white[50]};
    }
  }
`;

export const Backdrop = styled.div`
  position: absolute;
  inset: 0;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: ${({ theme }) => theme.colors.black[50]};
    backdrop-filter: blur(1px);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
