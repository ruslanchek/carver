import React, { FC } from 'react';
import styles from './GlobalLoading.module.css';
import { useAuth } from '../../hooks/useAuth';
import { Spin } from 'antd';

export const GlobalLoading: FC = () => {
  const { appLoading } = useAuth();

  if (!appLoading) {
    return null;
  }

  return (
    <div className={styles.Root}>
      <Spin size='large' />
    </div>
  );
};
