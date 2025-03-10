import styles from './index.module.scss';
import classNames from 'classnames/bind';
import Lottie from 'react-lottie-player';
import LineLottie from '@/public/lottie/home-line-animation.json';
import { useState } from 'react';
import { useRouter } from 'next/router';

const cx = classNames.bind(styles);

export default function Home() {
  const [currentPath, setCurrentPath] = useState('');
  const [lottiePlay, setLottiePlay] = useState(false);

  const router = useRouter();

  const handleLinkClick = (path: string) => {
    setLottiePlay(true);
    setCurrentPath(path);

    setTimeout(() => {
      router.push(path);
    }, 1000);
  };

  const menuItems = [
    { label: 'PROJECTS', path: '/projects' },
    { label: 'ABOUT', path: '/about' },
    { label: 'CONTACT', path: '/contact' },
  ];

  return (
    <div className={cx('home-css-wrapper')}>
      <div className={cx('home-wrapper')}>
        <h1 className={cx('head')}>
          <div className={cx('head-title')}>
            <p>scenoGRApheR</p>
            <p>•</p>
            <p>soli-jang</p>
          </div>
        </h1>
        <div className={cx('home-container')}>
          <main className={cx('main-container')}>
            {menuItems.map((item, index) => (
              <div key={index} className={cx('menu-wrapper')}>
                <button
                  className={cx('button')}
                  onClick={() => handleLinkClick(item.path)}
                >
                  {item.label}
                </button>
                {currentPath === item.path && (
                  <Lottie
                    play={lottiePlay}
                    loop={false}
                    animationData={LineLottie}
                    className={cx('line-lottie')}
                    onComplete={() => setLottiePlay(false)}
                  />
                )}
              </div>
            ))}
          </main>
          <footer className={cx('footer-container')}>
            <p className={cx('footer', 'name')}>SOLI-JANG</p>
            <p className={cx('footer', 'based')}>BASED IN BERLIN, GERMANY</p>
            <p className={cx('footer', 'year')}>@2023-2025</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
