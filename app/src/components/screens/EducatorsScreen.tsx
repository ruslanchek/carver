import React, { FC, useContext } from 'react';
import { RouteComponentProps } from '@reach/router';
import { MainLayout } from '../common/MainLayout';
import { Typography } from 'antd';

interface IProps extends RouteComponentProps {}

export const EducatorsScreen: FC<IProps> = () => {
  return (
    <MainLayout>
      <Typography.Title level={1}>Educators</Typography.Title>
    </MainLayout>
  );
};
