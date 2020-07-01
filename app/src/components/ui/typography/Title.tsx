import React, { FC } from 'react';

interface IProps {
  level?: 1 | 2 | 3 | 4 | 5;
}

export const Title: FC<IProps> = ({ children, level = 1 }) => {
  switch (level) {
    case 5: {
      return <h5>{children}</h5>;
    }

    case 4: {
      return <h4>{children}</h4>;
    }

    case 3: {
      return <h3>{children}</h3>;
    }

    case 2: {
      return <h2>{children}</h2>;
    }

    default: {
      return <h1>{children}</h1>;
    }
  }
};
