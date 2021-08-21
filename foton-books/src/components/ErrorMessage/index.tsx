import styled, { css } from 'styled-components';

const ErrorMessage = styled.p`
  ${({ theme }) => css`
    color: #ff6978;
    font-family: ${theme.font.types.display};
    font-size: ${theme.font.sizes.normal};
    letter-spacing: 0.5px;
  `}
`;

export default ErrorMessage;
