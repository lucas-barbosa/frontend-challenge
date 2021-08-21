import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 400px;
  text-align: center;
  margin: auto;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: black;
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: 400;
    letter-spacing: 0.5px;
  `}
`;

export const Message = styled.div`
  ${({ theme }) => css`
    margin: 20px 0;
    font-size: ${theme.font.sizes.normal};
    line-height: 1.15;
  `}
`;
