import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './Title.module.css';

interface IProps {
  level?: 1 | 2 | 3 | 4 | 5;
  className?: string;
}

export const Title: FC<IProps> = ({ children, level = 1, className = '' }) => {
  switch (level) {
    case 5: {
      return <h5 className={classNames(styles.H5, className)}>{children}</h5>;
    }

    case 4: {
      return <h4 className={classNames(styles.H4, className)}>{children}</h4>;
    }

    case 3: {
      return <h3 className={classNames(styles.H3, className)}>{children}</h3>;
    }

    case 2: {
      return <h2 className={classNames(styles.H2, className)}>{children}</h2>;
    }

    default: {
      return <h1 className={classNames(styles.H1, className)}>{children}</h1>;
    }
  }
};
