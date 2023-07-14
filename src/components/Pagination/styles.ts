import styled from 'styled-components';

interface ButtonProps {
  readonly $isActive?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button<ButtonProps>`
  color: ${({ theme }) => theme.colors.white[50]};
  background-color: transparent;
  border: none;
  cursor: pointer;

  p,
  svg {
    transition: color 0.1s ease-in-out;
  }

  p {
    font-size: 1.0625rem;
  }

  svg {
    font-size: 1.25rem;
  }

  &:last-child {
    flex-direction: row-reverse;

    svg {
      transform: rotate(180deg);
    }
  }

  &:hover {
    p,
    svg {
      color: ${({ theme }) => theme.colors.white[100]};
    }
  }

  &:disabled {
    cursor: no-drop;

    p,
    svg {
      color: ${({ theme, $isActive }) => {
        return $isActive ? theme.colors.white[100] : theme.colors.white[30];
      }};
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}px) {
    p {
      font-size: 1.75rem;
    }

    svg {
      font-size: 2rem;
    }
  }
`;
