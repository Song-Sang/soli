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
    { label: 'PROJECTS', path: '/projects', className: 'projects' },
    { label: 'CONTACT', path: '/contact', className: 'contact' },
    { label: 'ABOUT', path: '/about', className: 'about' },
    { label: 'GALLERY', path: '/gallery', className: 'gallery' },
  ];

  return (
    <div className={cx('home-wrapper')}>
      <nav className={cx('nav')}>
        <div className={cx('nav-title')}>
          <p>scenoGRApheR</p>
          <p>•</p>
          <p>poRtfolio</p>
        </div>
      </nav>
      <div className={cx('home-container')}>
        <main className={cx('main-container')}>
          <div className={cx('home-title-wrapper')}>
            <h1 className={cx('home-title')}>HOME</h1>
            <Image
              src={homeCircle}
              width={800}
              height={800}
              alt="동그라미"
              className={cx('circle')}
            />
          </div>
          <div className={cx('button-container')}>
            {menuItems.map((item, index) => (
              <div key={index} className={cx('menu-wrapper')}>
                <Link
                  href={item.path}
                  className={cx('button', 'menu', item.className)}
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
          <p className={cx('title2')}>BASED IN BERLIN, GERMANY</p>
          <p className={cx('title4')}>@2023-2025 </p>
        </footer>
      </div>
    </div>
  );
}
