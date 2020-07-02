import React, { FC } from 'react';
import styles from './EducatorsList.module.css';
import { CardPerson } from '../../ui/cards/CardPerson';
import { Row, Col } from 'antd';

interface IProps {}

export const EducatorsList: FC<IProps> = () => {
  return (
    <div className={styles.Root}>
      <Row justify='start' gutter={30}>
        <Col span={4}>
          <CardPerson />
        </Col>
      </Row>
    </div>
  );
};
