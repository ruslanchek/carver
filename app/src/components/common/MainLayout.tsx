import React, { FC } from 'react';
import styles from './MainLayout.module.css';
import { MainNav } from './MainNav';
import { Typography } from 'antd';

interface IProps {}

export const MainLayout: FC<IProps> = ({ children }) => {
  return (
    <div className={styles.Root}>
      <MainNav title={<span>Educators</span>} />
      <main className={styles.Main}>{children}</main>
    </div>
  );
};
