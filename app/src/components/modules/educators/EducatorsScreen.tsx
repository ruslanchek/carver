import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { MainLayout } from '../../common/MainLayout';
import { Title } from '../../ui/typography/Title';
import { EducatorsList } from './EducatorsList';

interface IProps extends RouteComponentProps {}

export const EducatorsScreen: FC<IProps> = () => {
  return (
    <MainLayout>
      <EducatorsList />
    </MainLayout>
  );
};
