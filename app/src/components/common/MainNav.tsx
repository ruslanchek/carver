import React, { FC, useState, Fragment, ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link } from '@reach/router';
import { PATHS } from '../../common/paths';
import { MenuOutlined, ArrowLeftOutlined, HomeTwoTone } from '@ant-design/icons';
import styles from './MainNav.module.css';
import { useTransition, animated } from 'react-spring';
import { Logo } from './Logo';
import { Typography } from 'antd';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

interface IProps {
  title: ReactNode;
}

const container = document.getElementById('main-nav');

export const MainNav: FC<IProps> = ({ title }) => {
  const profileMenuRef = useRef(null);
  const [opened, setOpened] = useState(false);
  const toggle = () => {
    setOpened(!opened);
  };
  const transitions = useTransition(opened, null, {
    config: {
      mass: 1,
      tension: 407,
      friction: 33,
    },
    from: { transform: 'translateX(-150%)' },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(-150%)' },
  });
  useOnClickOutside(() => {
    setOpened(false);
  }, profileMenuRef);

  return (
    <div className={styles.Root}>
      <button className={styles.Button} onClick={toggle}></button>
      {transitions.map(({ item, key, props }) =>
        item ? (
          <Fragment key={key}>
            {createPortal(
              <animated.div style={props} className={styles.Nav} ref={profileMenuRef}>
                <div className={styles.NavButton}>
                  <button className={styles.Button} onClick={toggle}>
                    <ArrowLeftOutlined />
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
        <Logo size={34} type='small' />
      </div>
      <Typography.Title level={1} className={styles.Title}>
        {title}
      </Typography.Title>
    </div>
  );
};
