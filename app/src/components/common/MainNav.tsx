import React, { FC, useState, Fragment, ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link } from '@reach/router';
import { PATHS } from '../../common/paths';
import styles from './MainNav.module.css';
import { useTransition, animated } from 'react-spring';
import { Logo } from './Logo';
import { Typography } from 'antd';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { IconMenu } from '../ui/icons/IconMenu';
import { IconArrowThinLeftCircle } from '../ui/icons/IconArrowThinLeftCircle';
import { ActiveLink } from './ActiveLink';

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
      <button className={styles.Button} onClick={toggle}>
        <IconMenu />
      </button>
      {transitions.map(({ item, key, props }) =>
        item ? (
          <Fragment key={key}>
            {createPortal(
              <animated.div style={props} className={styles.Nav} ref={profileMenuRef}>
                <div className={styles.NavButton}>
                  <button className={styles.Button} onClick={toggle}>
                    <IconArrowThinLeftCircle />
                  </button>
                </div>
                <ActiveLink className={styles.Link} activeClassName='active' to={PATHS.HOME}>
                  Home
                </ActiveLink>
                <ActiveLink className={styles.Link} activeClassName='active' to={PATHS.SCHEDULE}>
                  Schedule
                </ActiveLink>
                <ActiveLink className={styles.Link} activeClassName='active' to={PATHS.PROGRESS}>
                  Progress
                </ActiveLink>
                <ActiveLink className={styles.Link} activeClassName='active' to={PATHS.STUDENTS}>
                  Students
                </ActiveLink>
                <ActiveLink className={styles.Link} activeClassName='active' to={PATHS.EDUCATORS}>
                  Educators
                </ActiveLink>
                <ActiveLink className={styles.Link} activeClassName='active' to={PATHS.COURSES}>
                  Courses
                </ActiveLink>
                <ActiveLink className={styles.Link} activeClassName='active' to={PATHS.EXERCISES}>
                  Exercises
                </ActiveLink>
                <ActiveLink className={styles.Link} activeClassName='active' to={PATHS.SETTINGS}>
                  Settings
                </ActiveLink>
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
