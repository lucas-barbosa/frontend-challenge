import styled, { css } from 'styled-components';

const Container = styled.div`
  ${({ theme }) => css`
    padding-left: ${theme.container.gutter};
    padding-right: ${theme.container.gutter};
    max-width: ${theme.container.breakpoint};
    width: 100%;
    margin: auto;
  `}
`;

export default Container;
