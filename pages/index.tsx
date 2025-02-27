import styles from './index.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';
import homeCircle from '@/public/images/home-circle.webp';
import Lottie from 'react-lottie-player';
import LineLottie from '@/public/lottie/home-line-animation.json';
import { useState } from 'react';
import Link from 'next/link';

const cx = classNames.bind(styles);

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isStopped, setIsStopped] = useState(false);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setIsStopped(false);
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
            <p>poRtfolio</p>
          </div>
        </h1>
        <div className={cx('home-container')}>
          <main className={cx('main-container')}>
            <div className={cx('home-title-wrapper')}></div>
            <div className={cx('button-container')}>
              {menuItems.map((item, index) => (
                <div key={index} className={cx('menu-wrapper')}>
                  <Link
                    href={item.path}
                    className={cx('button', 'menu')}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.label}
                  </Link>
                  {hoveredIndex === index && (
                    <Lottie
                      play={!isStopped}
                      loop={false}
                      animationData={LineLottie}
                      className={cx('line-lottie')}
                      onComplete={() => setIsStopped(true)}
                    />
                  )}
                </div>
              ))}
            </div>
          </main>
          <footer className={cx('footer-container')}>
            <p>Based In BERLIN, GERMANY</p>
            <p>Soli-Jang</p>
            <p>@2023-2025</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
