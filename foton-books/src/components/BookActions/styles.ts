import styled, { css } from 'styled-components';

export const Wrapper = styled.aside`
  background: #ffffff;
  box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  ${({ theme }) => css`
    align-items: center;
    background: none;
    border: 0;
    color: #3f4043;
    cursor: pointer;
    display: flex;
    font-family: ${theme.font.types.display};
    font-size: ${theme.font.sizes.small};
    font-weight: 600;
    letter-spacing: 1px;
    line-height: ${theme.font.sizes.normal};
    padding: 20px;
    outline: none;

    svg {
      color: #cfcbd2;
      margin-right: 10px;
      transition: color 0.3s;
    }

    :hover {
      svg {
        color: #3f4043;
      }
    }
  `}
`;
