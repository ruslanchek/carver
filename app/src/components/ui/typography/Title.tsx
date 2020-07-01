import React, { FC } from 'react';

interface IProps {
  level?: 1 | 2 | 3 | 4 | 5;
  className?: string;
}

export const Title: FC<IProps> = ({ children, level = 1, className = '' }) => {
  switch (level) {
    case 5: {
      return <h5 className={className}>{children}</h5>;
    }

    case 4: {
      return <h4 className={className}>{children}</h4>;
    }

    case 3: {
      return <h3 className={className}>{children}</h3>;
    }

    case 2: {
      return <h2 className={className}>{children}</h2>;
    }

    default: {
      return <h1 className={className}>{children}</h1>;
    }
  }
};
