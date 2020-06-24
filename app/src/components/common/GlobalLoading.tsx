import React, { FC } from 'react';
import { Spinner, Intent } from '@blueprintjs/core';
import styles from './GlobalLoading.module.css';
import { useAuth } from '../../hooks/useAuth';

export const GlobalLoading: FC = () => {
  const { appLoading } = useAuth();

  if (!appLoading) {
    return null;
  }

  return (
    <div className={styles.Root}>
      <Spinner intent={Intent.PRIMARY} size={32} />
    </div>
  );
};
