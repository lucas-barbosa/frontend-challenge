import styled, { css } from 'styled-components';
import * as Symbols from 'components/Symbols/styles';

export const Title = styled.h3`
  cursor: pointer;
  color: #2a2b26;
  font-family: 'Playfair Display';
  font-size: 1.25rem;
  letter-spacing: 2px;
  line-height: 1.35;
`;

export const Author = styled.div`
  ${({ theme }) => css`
    color: #74776d;
    font-family: 'Roboto';
    font-size: ${theme.font.sizes.xxsmall};
    line-height: ${theme.font.sizes.xsmall};
  `}
`;

export const Chapters = styled.div`
  ${({ theme }) => css`
    color: #2a2b26;
    font-family: ${theme.font.types.display};
    font-size: ${theme.font.sizes.xxsmall};
    line-height: ${theme.font.sizes.xsmall};
    letter-spacing: 0.2px;

    strong {
      color: #ff6978;
    }
  `}
`;

export const Cover = styled.img`
  border-radius: 1px;
  width: 88px;
  height: 130px;
  filter: drop-shadow(5px 7px 32px rgba(140, 170, 58, 0.193701));
`;

export const Content = styled.div``;

export const SymbolsGroup = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;

  ${Symbols.OutlinedCircleWrapper} {
    position: absolute;
    width: 18px;
    height: 18px;
    left: 223px;
    top: -6px;
    color: rgba(214, 209, 177, 0.09);
  }

  ${Symbols.CircleWrapper} {
    position: absolute;
    width: 116px;
    height: 116px;
    left: 237px;
    top: 22px;
  }

  ${Symbols.RectangleWrapper} {
    position: absolute;
    left: 309.17px;
    top: 70px;
  }

  ${Symbols.WavesWrapper} {
    position: absolute;
    width: 69px;
    height: 69px;
    left: 295px;
    top: -19px;
  }
`;

export const Wrapper = styled.div`
  background: #eef5db;
  border-radius: 0px 3px 3px 0px;
  box-shadow: 0px 3px 45px rgba(121, 141, 67, 0.115084);
  padding: 10px 20px;
  position: relative;
  width: 330px;

  ${Content} {
    margin-left: 98px;
  }

  ${Author} {
    margin-top: 5px;
  }

  ${Chapters} {
    margin-top: 20px;
  }

  ${Cover} {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
