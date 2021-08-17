import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  background: #fdfcfc;
  border-radius: 10px;
  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.122623);
  display: flex;
  align-items: center;
  padding: 0 15px;

  :focus-within {
    box-shadow: 0 0 8px rgba(212, 173, 134, 0.5);
  }
`;

export const Input = styled.input`
  ${({ theme }) => css`
    background: transparent;
    border: 0;
    color: #000;
    font-family: ${theme.font.types.text};
    font-size: ${theme.font.sizes.normal};
    font-weight: bold;
    line-height: 1.125;
    padding: 15px 0 15px 10px;
    outline: none;
    width: 100%;

    ::placeholder {
      color: #54565a;
      font-weight: normal;
    }
  `}
`;

export const Icon = styled.img``;
