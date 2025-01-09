import Link from 'next/link';
import styles from './MainTopic.module.scss';
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef, useState } from 'react';

const cx = classNames.bind(styles);

function NextArrow(props: any) {
  const { onClick } = props;
  return <div onClick={onClick}>다음</div>;
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return <div onClick={onClick}>이전</div>;
}

export default function MainTopic() {
  const sliderRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;

  const settings = {
    slidesToShow: 1,
    infinite: false,
    slidesToScroll: 1,
    arrows: false,

    afterChange: (current: number) => {
      setCurrentSlide(current);
    },
  };

  return (
    <>
      {currentSlide > 0 && (
        <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
      )}
      {currentSlide < totalSlides - 1 && (
        <NextArrow onClick={() => sliderRef.current.slickNext()} />
      )}
      <Slider ref={sliderRef} {...settings}>
        <div className={cx('MainTopic-wrapper')}>
          <div className={cx('Topic-container')}>
            <Link href="/" className={cx('Topic')}>
              DENYING THE DRAGON
            </Link>
          </div>
          <div className={cx('Topic-container')}>
            <Link href="/" className={cx('Topic')}>
              EMBODIED
            </Link>
          </div>
          <div className={cx('Topic-container')}>
            <Link href="/" className={cx('Topic')}>
              FOREST LOVE
            </Link>
          </div>
        </div>
        <div className={cx('MainTopic-wrapper')}>
          <div className={cx('Topic-container')}>
            <Link href="/" className={cx('Topic')}>
              DIGITAL NOMADS
            </Link>
          </div>
          <div className={cx('Topic-container')}>
            <Link href="/" className={cx('Topic')}>
              HUABUN
            </Link>
          </div>
          <div className={cx('Topic-container')}>
            <Link href="/" className={cx('Topic')}>
              MUSIKAL 21:58
            </Link>
          </div>
          <div className={cx('Topic-container')}>
            <Link href="/" className={cx('Topic')}>
              RICH FAMILY
            </Link>
          </div>
          <div className={cx('Topic-container')}>
            <Link href="/" className={cx('Topic')}>
              WUW
            </Link>
          </div>
        </div>
      </Slider>
    </>
  );
}
