import { Link as L } from 'react-router-dom';
import styled from 'styled-components';

interface BackdropProps {
  readonly $placeholder: string[];
}

export const Wrapper = styled.figure`
  padding: 0.75rem 0.8125rem;
  position: relative;
  overflow: hidden;

  #contents {
    position: relative;
    z-index: 2;
    margin-top: 3.375rem;

    #content-subdetail {
      font-size: 0.75rem;
    }

    #content-detail {
      font-size: 0.85rem;
      font-weight: 200;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
    }
  }

  &:hover {
    #backdrop-image {
      transform: scale(1.209);
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}px) {
    padding: 1.5rem 1.6875rem;

    #contents {
      margin-top: 0;

      #content-detail {
        font-size: 0.9375rem;
        -webkit-line-clamp: 3;
        margin-right: 35%;
      }
    }
  }
`;

export const Link = styled(L)`
  font-size: 1.25rem;
  text-decoration: underline;
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: block;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  cursor: ${({ to }) => (to === '#' ? 'default' : 'pointer')};

  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}px) {
    font-size: 1.875rem;
  }
`;

export const Backdrop = styled.div<BackdropProps>`
  z-index: 1;
  position: absolute;
  top: -10px;
  bottom: -10px;
  left: -10px;
  right: -10px;
  background-image: ${({ $placeholder }) => `url(${$placeholder[1]})`};
  background-size: cover;
  background-position: top right;

  img {
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      360deg,
      rgba(0, 0, 0, 0.91) 0%,
      rgba(0, 0, 0, 0.85) 26.14%,
      rgba(0, 0, 0, 0.71) 46.06%,
      rgba(0, 0, 0, 0.4) 70.73%,
      rgba(217, 217, 217, 0) 100%
    );
    backdrop-filter: blur(2px);
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}px) {
    background-image: ${({ $placeholder }) => `url(${$placeholder[0]})`};
    background-position: right center;

    &::after {
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.91) 0%,
        rgba(0, 0, 0, 0.85) 25%,
        rgba(0, 0, 0, 0.71) 50%,
        rgba(0, 0, 0, 0.4) 75%,
        rgba(217, 217, 217, 0) 100%
      );
    }
  }
`;
