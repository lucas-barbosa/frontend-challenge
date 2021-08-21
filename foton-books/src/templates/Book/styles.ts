import styled, { css } from 'styled-components';
import * as BookActionStyles from 'components/BookActions/styles';
import * as SymbolStyles from 'components/Symbols/styles';

export const Wrapper = styled.article`
  ${({ theme }) => css`
    ${BookActionStyles.Wrapper} {
      position: fixed;
      bottom: 55px;
      left: 20px;
      right: 20px;
      margin: auto;

      max-width: 335px;
      z-index: ${theme.layers.menu};
    }
  `}
`;

export const Cover = styled.img`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    width: 150px;
    height: 230px;
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    background-color: #fff6e5;
    border-radius: 0px 0px 100px 0px;
    height: 282px;
    padding-top: 55px;
    position: relative;

    a {
      cursor: pointer;
      position: relative;
      z-index: 2;
    }

    ${Cover} {
      position: absolute;
      bottom: -30px;
      left: 50%;
      transform: translateX(-50%);
      z-index: ${theme.layers.menu};
    }

    ${SymbolStyles.OvalWrapper} {
      position: absolute;
      bottom: -65px;
      left: 50%;
      transform: translateX(-50%);
      z-index: ${theme.layers.base};
    }
  `}
`;

export const Symbols = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;

  .smaller-blue-circle {
    color: #00173d;
    width: 63px;
    height: 63px;
    position: absolute;
    left: 73px;
    top: 115px;
  }

  .smaller-pink-circle {
    color: #ff6978;
    position: absolute;
    width: 15px;
    height: 15px;
    left: 46px;
    top: 125px;
  }

  .outlined-circle {
    position: absolute;
    width: 24px;
    height: 24px;
    right: 103px;
    top: 86px;
  }

  .smaller-waves {
    position: absolute;
    width: 48px;
    height: 48px;
    right: 97px;
    top: 218.11px;
    transform: rotate(25deg);
  }

  .bigger-waves {
    position: absolute;
    width: 100px;
    height: 100px;
    right: -39px;
    top: -18px;
    transform: rotate(25deg);
  }
`;

export const Content = styled.div`
  margin-top: 67px;
  padding-bottom: 130px;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: #36383a;
    font-family: ${theme.font.types.display};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: 400;
    letter-spacing: 0.5px;
    line-height: 1.2;

    strong {
      font-weight: 600;
      letter-spacing: 1.5px;
    }
  `}
`;

export const Author = styled.div`
  ${({ theme }) => css`
    color: #ff6978;
    font-family: ${theme.font.types.display};
    font-size: ${theme.font.sizes.normal};
    letter-spacing: 0.67px;
    line-height: 1.18;

    margin-top: 7px;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    color: rgba(49, 49, 49, 0.6);
    font-family: ${theme.font.types.text};
    font-size: ${theme.font.sizes.small};
    letter-spacing: 0.2px;
    line-height: 1.78;

    margin-top: 10px;
  `}
`;
