import React, { FC } from 'react';

import styles from './SimpleLayout.module.css';

interface IProps {}

export const SimpleLayout: FC<IProps> = ({ children }) => {
  return <div className={styles.Root}>{children}</div>;
};
