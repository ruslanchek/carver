import React, { FC, useState, Fragment, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Link } from '@reach/router';
import { PATHS } from '../../common/paths';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import styles from './MainNav.module.css';
import { useTransition, animated } from 'react-spring';
import { Logo } from './Logo';
import { Typography } from 'antd';

interface IProps {
  title: ReactNode;
}

const container = document.getElementById('main-nav');

export const MainNav: FC<IProps> = ({ title }) => {
  const [opened, setOpened] = useState(false);
  const toggle = () => {
    setOpened(!opened);
  };
  const transitions = useTransition(opened, null, {
    from: { opacity: 0, scale: 0.9 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0.9 },
  });

  return (
    <div className={styles.Root}>
      <button className={styles.Button} onClick={toggle}>
        <MenuOutlined />
      </button>
      {transitions.map(({ item, key, props }) =>
        item ? (
          <Fragment>
            {createPortal(
              <animated.div style={props} className={styles.Nav}>
                <div className={styles.NavButton}>
                  <button className={styles.Button} onClick={toggle}>
                    <CloseOutlined />
                  </button>
                </div>

                <Link className={styles.Link} to={PATHS.EDUCATORS}>
                  Home
                </Link>
                <Link className={styles.Link} to={PATHS.EDUCATORS}>
                  Schedule
                </Link>
                <Link className={styles.Link} to={PATHS.EDUCATORS}>
                  Progress
                </Link>
                <Link className={styles.Link} to={PATHS.EDUCATORS}>
                  Students
                </Link>
                <Link className={styles.Link} to={PATHS.EDUCATORS}>
                  Educators
                </Link>
                <Link className={styles.Link} to={PATHS.EDUCATORS}>
                  Courses
                </Link>
                <Link className={styles.Link} to={PATHS.EDUCATORS}>
                  Exercises
                </Link>
                <Link className={styles.Link} to={PATHS.EDUCATORS}>
                  Settings
                </Link>
              </animated.div>,
              container,
            )}
          </Fragment>
        ) : null,
      )}
      <div className={styles.Logo}>
        <Logo size={32} type='small' />
      </div>
      <Typography.Title level={1} className={styles.Title}>
        {title}
      </Typography.Title>
    </div>
  );
};
