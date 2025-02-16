import styles from './WorksMain.module.scss';
import classNames from 'classnames/bind';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef, useState } from 'react';
import ArtworkPerformance from './MainTopic/ArtworkPerformance';
import StageCostume from './MainTopic/StageCostume';
import Image from 'next/image';
import arrowImg from '@/public/images/icon/arrow.svg';

const cx = classNames.bind(styles);

interface ArrowProps {
  onClick: () => void;
}

function NextArrow({ onClick }: ArrowProps) {
  return (
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
  );
}

function PrevArrow({ onClick }: ArrowProps) {
  return (
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
  );
}

export default function WorksMain() {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const totalSlides = 2;

  const settings: Settings = {
    slidesToShow: 1,
    infinite: false,
    slidesToScroll: 1,
    arrows: false,
    speed: 2000,
    afterChange: (current: number) => {
      setCurrentSlide(current);
    },
  };

  return (
    <main className={cx('worksMain-wrapper')}>
      <div className={cx('worksMain-arrows')}>
        <div className={cx('prev-arrow')}>
          {currentSlide > 0 && (
            <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
          )}
        </div>
        <div className={cx('next-arrow')}>
          {currentSlide < totalSlides - 1 && (
            <NextArrow onClick={() => sliderRef.current?.slickNext()} />
          )}
        </div>
      </div>
      <div className={cx('worksMain-contents')}>
        <Slider ref={sliderRef} {...settings}>
          <ArtworkPerformance />
          <StageCostume />
        </Slider>
      </div>
    </main>
  );
}
