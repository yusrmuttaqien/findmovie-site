import styled from 'styled-components';
import P from 'components/Pagination';
import L from 'components/Loading';
import A from 'components/Avatar';

export const Wrapper = styled.section`
  padding: 0 ${({ theme }) => theme.space.x.mobile};

  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}px) {
    padding: 0 ${({ theme }) => theme.space.x.desktop};
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;

  #search-title {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    row-gap: 0.1rem;

    p {
      font-size: 0.85rem;
      font-weight: 200;
    }

    h3 {
      font-weight: 500;
      font-size: 1rem;
    }
  }

  #categories-wrapper {
    display: inherit;
    flex-direction: inherit;
    gap: 0.625rem;

    #categories {
      display: inherit;
      flex-direction: inherit;
      position: relative;
      gap: inherit;

      &[data-categories='people'] {
        > div {
          flex-direction: row;
          flex-wrap: wrap;
        }
      }

      h3 {
        font-weight: 500;
        font-size: 1rem;
        position: sticky;
        top: 0;
        left: 0;
        z-index: 2;
        backdrop-filter: blur(5px);
        background-color: ${({ theme }) => theme.colors.black[80]};
      }

      > div {
        display: inherit;
        flex-direction: column;
        gap: 0.625rem;
        z-index: 1;
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}px) {
    gap: 2rem;

    #search-title {
      p {
        font-size: 2rem;
      }

      h3 {
        font-size: 2.125rem;
      }
    }

    #categories-wrapper {
      gap: 1.25rem;

      #categories {
        &[data-categories='people'] {
          > div {
            display: flex;
          }
        }

        h3 {
          font-size: 2.125rem;
        }

        > div {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 1.25rem;
        }
      }
    }
  }
`;

export const Pagination = styled(P)`
  position: sticky;
  top: 0;
  z-index: 2;
  backdrop-filter: blur(5px);
  background-color: ${({ theme }) => theme.colors.black[80]};
  margin-top: 1rem;

  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}px) {
    margin-top: 1.25rem;
  }
`;

export const Loading = styled(L)`
  height: 50rem;
`;

export const Avatar = styled(A)`
  flex-shrink: 0;
`;
