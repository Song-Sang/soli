import styles from './index.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';
import NavBar from '../components/NavBar/NavBar';

import homeImg_1 from '@/public/images/title/Musikal21:58/Musikal7.jpeg';
import homeImg_2 from '@/public/images/title/Embodied/Embodied3.jpg';
import homeImg_3 from '@/public/images/title/DenyingTheDragon/DTD2.jpg';

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <div className={cx('home-wrapper')}>
      <main className={cx('home-container')}>
        <NavBar />
        <div className={cx('title-container')}>
          <div className={cx('home-image-container')}>
            <Image
              className={cx('home-image-1')}
              src={homeImg_1}
              alt="홈 이미지"
              width={220}
              height={310}
            />
            <Image
              className={cx('home-image-2')}
              src={homeImg_2}
              alt="홈 이미지"
              width={220}
              height={310}
            />
            <Image
              className={cx('home-image-3')}
              src={homeImg_3}
              alt="홈 이미지"
              width={220}
              height={310}
            />
          </div>
          <div>
            <p className={cx('sub-title')}>Scenographer</p>
            <h1 className={cx('title')}>SOLI - JANG</h1>
            <p className={cx('Tertiary-title')}>WORKS ‣</p>
          </div>
        </div>
        <footer className={cx('footer-container')}>
          <div className={cx('footer-left')}>Soli-Jang</div>
          <div className={cx('footer-center')}>
            <p>SCENOGRAPHER</p>
            <p>BASED IN BERLIN, GERMANY</p>
          </div>
          <div className={cx('footer-right')}>@2023 - 2025</div>
        </footer>
      </main>
    </div>
  );
}
