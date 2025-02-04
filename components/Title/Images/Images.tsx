import Image from 'next/image';
import styles from './Images.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import Lottie from 'react-lottie-player';
import lineLottie from '@/public/lottie/line-animation.json';

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
              <li key={index}>
                <Image
                  className={cx('image')}
                  width={800}
                  height={800}
                  src={image}
                  alt="아"
                  priority
                />
              </li>
            ))}
          </div>
          <div className={cx('slide', 'clone', { stop: !imgRolling })}>
            {images.map((image, index) => (
              <li key={index}>
                <Image
                  className={cx('image')}
                  width={800}
                  height={800}
                  src={image}
                  alt="아"
                  priority
                />
              </li>
            ))}
          </div>
        </ul>
        <Lottie
          loop
          animationData={lineLottie}
          play
          className={cx('line-lottie')}
          speed={0.3}
        />
      </div>
    </div>
  );
}
