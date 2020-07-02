import React, { FC } from 'react';
import styles from './MainLayout.module.css';
import { MainNav } from './MainNav';

interface IProps {
  title: string;
}

export const MainLayout: FC<IProps> = ({ children, title }) => {
  return (
    <div className={styles.Root}>
      <MainNav title={<span>{title}</span>} />
      <main className={styles.Main}>{children}</main>
    </div>
  );
};
