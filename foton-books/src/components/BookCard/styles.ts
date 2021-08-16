import styled, { css } from 'styled-components';

export const Wrapper = styled.article`
  color: #313131cc;
`;

export const Link = styled.a`
  display: flex;
  text-decoration: none;
`;

export const Image = styled.img`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    width: 100px;
    height: 150px;
    transition: transform 0.2s;

    :hover {
      transform: scale(1.05);
    }
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    margin-top: 9px;
    font-family: ${theme.font.types.display};
    font-size: ${theme.font.sizes.xsmall};
    line-height: ${theme.font.sizes.small};
    font-weight: ${theme.font.weights.bold};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `}
`;

export const Author = styled.div`
  ${({ theme }) => css`
    margin-top: 5px;
    font-size: ${theme.font.sizes.xxsmall};
    line-height: ${theme.font.sizes.xsmall};
    font-family: 'Roboto';
    font-weight: 900;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `}
`;
