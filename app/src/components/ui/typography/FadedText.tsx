import React, { FC } from 'react';
import styles from './FadedText.module.css';

interface IProps {}

export const FadedText: FC<IProps> = ({ children }) => {
  return <span className={styles.Root}>{children}</span>;
};
