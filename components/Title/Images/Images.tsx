import Image from 'next/image';
import styles from './Images.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

const cx = classNames.bind(styles);

interface TitleImagesProps {
  images: WORKS_DATA_INNER['images'];
}

export default function TitleImages({ images }: TitleImagesProps) {
  const [imgRolling, setImgRolling] = useState(true);
  const onRollingStop = () => setImgRolling(false);
  const onRollingRun = () => setImgRolling(true);

  if (!images) {
    return null;
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('slide-container')}>
        <ul
          className={cx('slide-wrapper')}
          onMouseEnter={onRollingStop}
          onMouseLeave={onRollingRun}
        >
          <div className={cx('slide', 'original', { stop: !imgRolling })}>
            {images.map((image, index) => (
              <li
                key={index}
                className={cx({
                  big: index % 2 === 0,
                  small: index % 2 !== 0,
                })}
              >
                <Image
                  className={cx('image')}
                  width={1000}
                  height={1000}
                  src={image}
                  alt="아"
                />
              </li>
            ))}
          </div>
          <div className={cx('slide', 'clone', { stop: !imgRolling })}>
            {images.map((image, index) => (
              <li
                key={index}
                className={cx({
                  big: index % 2 === 0,
                  small: index % 2 !== 0,
                })}
              >
                <Image
                  className={cx('image')}
                  width={1000}
                  height={1000}
                  src={image}
                  alt="아"
                />
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
}
