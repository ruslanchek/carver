import React, { FC, useContext } from 'react';
import styles from './GlobalLoading.module.css';
import { Spin } from 'antd';

export const GlobalLoading: FC = () => {
  return (
    <div className={styles.Root}>
      <Spin size='large' />
    </div>
  );
};
