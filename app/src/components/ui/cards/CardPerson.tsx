import React, { FC } from 'react';
import { Avatar } from '../avatars/Avatar';
import styles from './CardPerson.module.css';
import { Title } from '../typography/Title';
import { EUISize } from '../utils/utils';

interface IProps {}

export const CardPerson: FC<IProps> = ({ children }) => {
  return (
    <div className={styles.Root}>
      <Avatar size={EUISize.Xl} src='https://i.pravatar.cc/300' title='James May' srcFallBack='JM' />
      <Avatar size={EUISize.Xl} title='James May' srcFallBack='JM' />
      <Title level={4}>James May</Title>
    </div>
  );
};
