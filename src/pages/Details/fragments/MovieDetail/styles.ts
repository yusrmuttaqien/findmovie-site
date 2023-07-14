import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5625rem;
  padding: 0 ${({ theme }) => theme.space.x.mobile};

  #metadatas {
    h3 {
      font-weight: 500;
      font-size: 1rem;

      &:not([data-meta='title']) {
        margin-bottom: 0.5rem;
      }

      span {
        font-weight: 800;
      }
    }

    > div {
      display: flex;
      flex-wrap: wrap;
      gap: 0.375rem;
    }

    &:last-child p {
      font-size: 0.85rem;
      font-weight: 200;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}px) {
    gap: 2rem;
    padding: 0 ${({ theme }) => theme.space.x.desktop};

    #metadatas {
      h3 {
        font-size: 2.125rem;

        &:not([data-meta='title']) {
          margin-bottom: 1rem;
        }
      }

      > div {
        gap: 0.625rem;
      }

      &:last-child p {
        font-size: 1.5rem;
      }
    }
  }
`;
