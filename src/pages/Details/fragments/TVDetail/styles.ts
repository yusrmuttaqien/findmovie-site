import styled from 'styled-components';
import CC from 'components/ContentCard';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5625rem;
  padding: 0 ${({ theme }) => theme.space.x.mobile};

  #metadatas {
    h3 {
      font-weight: 500;
      font-size: 1rem;

      span {
        font-weight: 800;
      }
    }

    > div {
      margin-top: 0.5rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.375rem;
    }

    &:last-child p {
      margin-top: 0.5rem;
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
      }

      > div {
        margin-top: 1rem;
        gap: 0.625rem;
      }

      &:last-child p {
        margin-top: 1rem;
        font-size: 1.5rem;
      }
    }
  }
`;

export const ContentCard = styled(CC)`
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}px) {
    width: calc(50% - ${({ theme }) => theme.space.x.desktop});
  }
`;
