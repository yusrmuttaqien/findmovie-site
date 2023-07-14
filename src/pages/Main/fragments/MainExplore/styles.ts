import styled from 'styled-components';
import L from 'components/Loading';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 ${({ theme }) => theme.space.x.mobile};
  gap: 2.25rem;

  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}px) {
    padding: 0 ${({ theme }) => theme.space.x.desktop};
    gap: 4.625rem;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;

  h2 {
    font-weight: 600;
    font-size: 2rem;
  }

  #categories-wrapper {
    display: inherit;
    flex-direction: inherit;
    gap: 0.625rem;

    #categories {
      position: relative;

      h3 {
        font-weight: 500;
        font-size: 1rem;
        margin-bottom: 0.625rem;
        position: sticky;
        top: 0;
        left: 0;
        z-index: 2;
        backdrop-filter: blur(5px);
        background-color: ${({ theme }) => theme.colors.black[80]};
      }

      > div {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 0.625rem;
        z-index: 1;
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}px) {
    gap: 2rem;

    h2 {
      font-size: 4rem;
    }

    #categories-wrapper {
      flex-direction: row;
      gap: 1.25rem;

      #categories {
        flex: 1;

        h3 {
          font-size: 2.125rem;
          margin-bottom: 2.125rem;
        }

        &:nth-child(2) h3 {
          text-align: right;
        }

        > div {
          gap: 1rem;
        }
      }
    }
  }
`;

export const Loading = styled(L)`
  height: 10rem;
`;
