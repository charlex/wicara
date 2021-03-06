import * as React from 'react';
import styled, { css } from 'styled-components';
import { NavLinkProps, NavLink } from 'react-router-dom';
import { variables } from '@kata-kit/theme';

export interface SidebarMainMenuProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  style?: React.CSSProperties;
  asNavLink?: boolean;
  to?: NavLinkProps['to'];
  exact?: NavLinkProps['exact'];
  icon: string;
}

const SidebarMainMenu: React.SFC<SidebarMainMenuProps> = ({
  className,
  style,
  icon,
  asNavLink,
  to,
  exact,
  children,
  ...rest
}) => {
  if (asNavLink && to) {
    return (
      <RootNavLink
        className={className}
        style={style}
        to={to}
        exact={exact}
        activeClassName="is-active"
        {...rest}
      >
        <Icon>
          <i className={`icon-${icon}`} />
        </Icon>
        <Span>{children}</Span>
      </RootNavLink>
    );
  }

  return (
    <RootAnchor className={className} style={style} {...rest}>
      <Icon>
        <i className={`icon-${icon}`} />
      </Icon>
      <Span>{children}</Span>
    </RootAnchor>
  );
};

const Icon = styled('div')`
  width: 40px;
  height: 40px;
  margin: 0 auto;
  margin-bottom: calc(${variables.spaces.space1} / 2);
  padding: 10px;
  font-size: 20px;
  color: #676b6d;
  border-radius: 4px /* $border-radius-small */;
`;

const Span = styled('span')`
  color: #676b6d;
`;

const BaseStyles = css`
  padding: ${variables.spaces.space1} 0;
  font-size: 12px;
  display: block;
  text-decoration: none;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: none;
    color: ${variables.colors.gray60};

    & ${Icon} {
      background-color: ${variables.colors.gray70};
      color: ${variables.colors.gray50};
    }
  }

  &:focus {
    outline: 0;
  }

  &.is-active {
    ${Span} {
      color: ${variables.colors.white};
    }

    ${Icon} {
      background-color: ${variables.colors.kataBlue};
      color: ${variables.colors.white};
    }
  }
`;

const RootAnchor = styled('a')`
  ${BaseStyles}
`;

const RootNavLink = styled(NavLink)`
  ${BaseStyles}
`;

export default SidebarMainMenu;
