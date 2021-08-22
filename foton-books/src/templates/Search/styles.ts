import styled, { css } from 'styled-components';

import * as BottomMenuStyles from 'components/BottomMenu/styles';
import * as SearchStyles from 'components/SearchForm/styles';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    ${BottomMenuStyles.Wrapper} {
      position: fixed;
      bottom: 0;
      z-index: ${theme.layers.menu};
    }
  `}
`;

export const CenterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;
