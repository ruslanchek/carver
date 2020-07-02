import React, { FC } from 'react';
import styles from './EducatorsList.module.css';
import { CardPerson } from '../../ui/cards/CardPerson';

interface IProps {}

export const EducatorsList: FC<IProps> = () => {
  return (
    <div className={styles.Root}>
      <CardPerson />
    </div>
  );
};
