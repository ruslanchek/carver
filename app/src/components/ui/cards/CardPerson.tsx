import React, { FC } from 'react';
import { Avatar } from '../avatars/Avatar';
import { Title } from '../typography/Title';
import { EUISize } from '../utils/utils';
import styles from './CardPerson.module.css';
import { FadedText } from '../typography/FadedText';

interface IProps {}

export const CardPerson: FC<IProps> = ({ children }) => {
  return (
    <div className={styles.Root}>
      <Avatar size={EUISize.Xl} src='https://i.pravatar.cc/300?img=14' title='James May' srcFallBack='JM' />
      <Title className={styles.Title} level={4}>
        James May
      </Title>
      <FadedText>Instructor</FadedText>
    </div>
  );
};
