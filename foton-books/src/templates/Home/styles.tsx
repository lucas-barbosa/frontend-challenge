import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Title = styled.h1`
  ${({ theme }) => css`
    align-items: center;
    color: #54565a;
    display: flex;
    font-family: ${theme.font.types.display};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: normal;

    span {
      color: #ff6978;
      font-weight: 600;
    }

    img {
      margin-left: 11px;
      width: 24px;
    }
  `}
`;

export const Section = styled.section`
  margin-top: 30px;

  :last-of-type {
    margin-bottom: 30px;
  }
`;

export const SectionHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SectionContent = styled.div`
  margin-top: 15px;
`;

export const SectionCurrentlyReading = styled.div`
  ${({ theme }) => css`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit, 330px);
    gap: 60px 20px;
}
    @media (min-width: ${theme.container.breakpoint}) {
      padding-left: ${theme.container.gutter};
      padding-right: ${theme.container.gutter};
      margin-left: auto;
      margin-right: auto;
      max-width: ${theme.container.breakpoint};
    }
  `}
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    color: #3f4043;
    font-family: ${theme.font.types.display};
    font-size: ${theme.font.sizes.large};
    font-weight: 500;
    letter-spacing: 0.5px;
    line-height: 1.3rem;
  `}
`;

export const Link = styled.a`
  ${({ theme }) => css`
    color: #4abdf1;
    cursor: pointer;
    font-family: ${theme.font.types.text};
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.sizes.normal};
    text-align: right;
    text-decoration: none;
    transition: color 0.3s;

    :hover {
      color: ${darken(0.3, '#4abdf1')};
    }
  `}
`;
