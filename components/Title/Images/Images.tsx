import Image from 'next/image';
import styles from './Images.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';
import lineLottie from '@/public/lottie/line-animation.json';
import useModalStore from '../../../store/useModalStore';

const cx = classNames.bind(styles);

interface TitleImagesProps {
  images: WORKS_DATA_INNER['images'] | undefined;
}

export default function TitleImages({ images }: TitleImagesProps) {
  const { isOpen, openModal } = useModalStore();
  const [imgRolling, setImgRolling] = useState(true);
  const [animationDuration, setAnimationDuration] = useState(50);

  useEffect(() => {
    if (images && images.length > 0) {
      setAnimationDuration(10 * images.length);
    }
  }, [images]);

  const onRollingStop = () => setImgRolling(false);
  const onRollingRun = () => setImgRolling(true);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('slide-container-css')}>
        <div className={cx('slide-container')}>
          <ul
            className={cx('slide-wrapper')}
            onMouseEnter={onRollingStop}
            onMouseLeave={onRollingRun}
          >
            <div
              className={cx('slide', 'original', {
                stop: isOpen || !imgRolling,
              })}
              style={{ animationDuration: `${animationDuration}s` }}
            >
              {images?.map((image, index) => (
                <li key={index} onClick={() => openModal(index)}>
                  <Image
                    className={cx('image')}
                    width={500}
                    height={500}
                    src={image}
                    alt="title 이미지 목록"
                    priority
                  />
                </li>
              ))}
            </div>
            <div
              className={cx('slide', 'clone', { stop: isOpen || !imgRolling })}
              style={{ animationDuration: `${animationDuration}s` }}
            >
              {images?.map((image, index) => (
                <li key={index} onClick={() => openModal(index)}>
                  <Image
                    className={cx('image')}
                    width={500}
                    height={500}
                    src={image}
                    alt="title 이미지 목록 클론"
                    priority
                  />
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
      <Lottie
        loop
        animationData={lineLottie}
        play
        className={cx('line-lottie')}
        speed={0.3}
      />
    </div>
  );
}
