import styled, { css } from 'styled-components';
import * as Symbols from 'components/Symbols/styles';

type WrapperProps = {
  active?: boolean;
};

const WrapperModifiers = {
  active: css`
    background: #00173d;
    transform: scale(1.05);
  `
};

export const Wrapper = styled.a<WrapperProps>`
  ${({ theme, active }) => css`
    background: ${active ? '#00173d' : '#451475'};
    border-radius: ${theme.border.radius};
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    padding: 15px 20px;
    position: relative;
    transition: color 0.3s, transform 0.3s;
    transform-origin: left;
    text-decoration: none;
    width: 260px;

    :hover {
      ${WrapperModifiers.active}
    }

    ${active && WrapperModifiers.active}

    ${Symbols.TriangleWrapper} {
      position: absolute;
      left: 61.95%;
      right: 25.97%;
      top: 2.73%;
      bottom: 76.97%;
    }

    ${Symbols.OutlinedCircleWrapper} {
      position: absolute;
      left: 52.94%;
      right: 40.44%;
      top: 10.07%;
      bottom: 76.98%;
    }

    ${Symbols.RectangleWrapper} {
      position: absolute;
      left: 53.37%;
      right: 29.72%;
      top: 68.7%;
      bottom: 28.42%;
      transform: rotate(14deg);
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    color: #fefefe;
    font-family: 'Playfair Display';
    font-size: ${theme.font.sizes.xxlarge};
    line-height: 1.33;
    letter-spacing: 2px;
  `}
`;

export const Author = styled.div`
  ${({ theme }) => css`
    color: #e7e7e1;
    margin-top: 5px;
    font-family: ${theme.font.types.display};
    font-size: ${theme.font.sizes.small};
    font-style: italic;
    line-height: ${theme.font.sizes.normal};
    letter-spacing: 1.29px;
  `}
`;

export const Count = styled.div`
  ${({ theme }) => css`
    color: #e7e7e1;
    display: flex;
    align-items: center;
    font-family: ${theme.font.types.display};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: 400;
    letter-spacing: 0.02px;
    line-height: ${theme.font.sizes.small};
    margin-top: 28px;

    > svg {
      margin-right: 3px;
    }
  `}
`;

export const Cover = styled.img`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    width: 70px;
    height: 100px;
  `}
`;

export const WavesWrapper = styled.div`
  position: absolute;
  left: -9.19%;
  right: 62.5%;
  top: 17.99%;
  bottom: -9.35%;
`;
