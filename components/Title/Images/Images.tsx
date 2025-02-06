import Image from 'next/image';
import styles from './Images.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import Lottie from 'react-lottie-player';
import lineLottie from '@/public/lottie/line-animation.json';
import useModalStore from '../../../store/useModalStore';

const cx = classNames.bind(styles);

interface TitleImagesProps {
  images: WORKS_DATA_INNER['images'];
}

export default function TitleImages({ images }: TitleImagesProps) {
  const { isOpen, openModal } = useModalStore();
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
          <div
            className={cx('slide', 'original', { stop: isOpen || !imgRolling })}
          >
            {images.map((image, index) => (
              <li key={index} onClick={() => openModal(index)}>
                <Image
                  className={cx('image')}
                  width={1200}
                  height={1200}
                  src={image}
                  alt="아"
                  priority
                />
              </li>
            ))}
          </div>
          <div
            className={cx('slide', 'clone', { stop: isOpen || !imgRolling })}
          >
            {images.map((image, index) => (
              <li key={index} onClick={() => openModal(index)}>
                <Image
                  className={cx('image')}
                  width={1200}
                  height={1200}
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
