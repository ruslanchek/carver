import React, { FC } from 'react';
import { Link } from '@reach/router';
import classNames from 'classnames';

interface IProps {
  to: string;
  className?: string;
  activeClassName?: string;
}

export const ActiveLink: FC<IProps> = ({ to, className = '', activeClassName = '', children }) => {
  const getNavLinkCLass = (props: { isCurrent: boolean }) => {
    return {
      className: classNames(className, {
        [activeClassName]: props.isCurrent,
      }),
    };
  };
  return (
    <Link to={to} getProps={getNavLinkCLass}>
      {children}
    </Link>
  );
};
