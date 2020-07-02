import React, { FC, useState } from 'react';
import styles from './Avatar.module.css';
import classNames from 'classnames';
import { EUISize } from '../utils/utils';

export enum EAvatarBorderType {
  ThinGray,
  ThickWhite,
}

interface IProps {
  src?: string;
  srcFallBack?: string;
  title?: string;
  style?: EAvatarBorderType;
  size: EUISize;
}

export const Avatar: FC<IProps> = ({ src, srcFallBack, title, style, size }) => {
  const [isImageReady, setIsImageReady] = useState(false);

  return (
    <div
      className={classNames(styles.Root, size, {
        [styles.RootThinGray]: style === EAvatarBorderType.ThinGray,
        [styles.RootThickWhite]: style === EAvatarBorderType.ThickWhite,
      })}>
      {src ? (
        <img
          onLoad={() => setIsImageReady(true)}
          className={classNames(styles.Image, size, {
            [styles.ImageReady]: isImageReady,
          })}
          src={src}
          alt={title}
        />
      ) : (
        srcFallBack && <span>{srcFallBack}</span>
      )}
    </div>
  );
};
