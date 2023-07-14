import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: max-content;

  span {
    display: block;
    width: 100%;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.white[100]};
    animation: stripAnimation 1s infinite linear;
  }

  @keyframes stripAnimation {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;
