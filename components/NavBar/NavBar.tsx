import Link from 'next/link';
import NavMenu from './Menu/NavMenu';
import styles from './NavBar.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import Lottie from 'react-lottie-player';
import hamburger from '@/public/lottie/hamburger.json';

const cx = classNames.bind(styles);

export default function NavBar() {
  const [titleVisible, setTitleVisible] = useState(true);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [lottiePaly, setLottiePlay] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [segments, setSegments] = useState<any>([0, 37]);

  const handleMenuButton = () => {
    setTitleVisible((prev) => !prev);
    setMobileMenuVisible((prev) => !prev);

    if (!mobileMenuVisible) {
      setLottiePlay(true);
    } else {
      setSegments([38, 75]);
      setLottiePlay(true);
    }
  };

  const handleLottiePlay = () => {
    setLottiePlay(false);
    setSegments([0, 37]);
  };

  return (
    <nav className={cx('nav-container')}>
      <Link href="/" className={cx('home-title', { disable: !titleVisible })}>
        soli-jang
      </Link>
      <div className={cx('nav-menu')}>
        <NavMenu />
      </div>
      <div className={cx('nav-menu-mobile', { able: mobileMenuVisible })}>
        <NavMenu />
      </div>
      <button onClick={handleMenuButton} className={cx('hamburger-lottie')}>
        <Lottie
          loop={false}
          animationData={hamburger}
          speed={1.5}
          play={lottiePaly}
          segments={segments}
          onComplete={handleLottiePlay}
        />
      </button>
    </nav>
  );
}
