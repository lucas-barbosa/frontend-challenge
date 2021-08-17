import styled, { css } from 'styled-components';

export const Wrapper = styled.footer`
  background: #fff;
`;

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
`;

type LinkProps = {
  active?: boolean;
};

export const Link = styled.a<LinkProps>`
  ${({ theme, active }) => css`
    color: #bfbebe;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: ${theme.font.types.display};
    font-size: ${theme.font.sizes.xxsmall};
    padding: 10px;
    text-decoration: none;
    transition: color 0.3s;

    ${active &&
    css`
      color: #313131;
    `}

    > svg {
      height: 18px;
    }

    > svg + span {
      padding-top: 10px;
    }

    :hover {
      color: #313131;
    }
  `}
`;
