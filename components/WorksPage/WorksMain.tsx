import styles from './WorksMain.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import ArtworkPerformance from './MainTopic/ArtworkPerformance';
import StageCostume from './MainTopic/StageCostume';
import Image from 'next/image';
import arrowImg from '@/public/images/icon/arrow.svg';
import NavBar from '../NavBar/NavBar';
import Lottie from 'react-lottie-player';
import swipeLottie from '@/public/lottie/swipe.json';
import { useProjectScroll } from '../../utils/useProjectScroll';
import { useSlideStore } from '../../store/useProjectsStore';

const cx = classNames.bind(styles);

interface ArrowProps {
  onClick: () => void;
}

function NextArrow({ onClick }: ArrowProps) {
  return (
    <div className={cx('projects-nav')}>
      <p className={cx('projects-subject')}>[ Stage • Costume ]</p>
      <button onClick={onClick} className={cx('arrow-button')}>
        other category
        <Image
          src={arrowImg}
          alt="화살표"
          width={20}
          height={20}
          className={cx('arrowImg')}
        />
      </button>
    </div>
  );
}

function PrevArrow({ onClick }: ArrowProps) {
  return (
    <div className={cx('projects-nav')}>
      <p className={cx('projects-subject')}>[ Artwork • Performance ]</p>
      <button onClick={onClick} className={cx('arrow-button')}>
        <Image
          src={arrowImg}
          alt="화살표"
          width={20}
          height={20}
          className={cx('arrowImg', 'reverse')}
        />
        other category
      </button>
    </div>
  );
}

export default function WorksMain() {
  const { currentSlide, setCurrentSlide } = useSlideStore();
  const { slideRefs, hasScroll, endScroll } = useProjectScroll(currentSlide);

  const handleNext = () => {
    if (currentSlide === 0) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide === 1) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <>
      <NavBar />
      <main className={cx('worksMain-wrapper')}>
        {currentSlide === 1 && <PrevArrow onClick={handlePrev} />}
        {currentSlide === 0 && <NextArrow onClick={handleNext} />}

        <div
          className={cx('slider-container')}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <div
            className={cx('slide')}
            ref={(el) => {
              slideRefs.current[0] = el;
            }}
          >
            <StageCostume />
          </div>
          <div
            className={cx('slide')}
            ref={(el) => {
              slideRefs.current[1] = el;
            }}
          >
            <ArtworkPerformance />
          </div>
        </div>
        {hasScroll[0] && currentSlide === 0 && (
          <Lottie
            loop
            animationData={swipeLottie}
            play
            className={cx('scroll-indicator', { rotate: endScroll })}
            speed={0.3}
          />
        )}
        {hasScroll[1] && currentSlide === 1 && (
          <Lottie
            loop
            animationData={swipeLottie}
            play
            className={cx('scroll-indicator', { rotate: endScroll })}
            speed={0.3}
          />
        )}
      </main>
    </>
  );
}
