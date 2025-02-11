import { useEffect, useState } from 'react';
import styles from './TopScrollButton.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';
import arrow from '@/public/images/icon/arrow.svg';

const cx = classNames.bind(styles);

export default function TopScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div className={cx('button-container')}>
          <button className={cx('button')} onClick={scrollToTop}>
            <Image src={arrow} alt="화살표" width={20} height={20} />
          </button>
        </div>
      )}
    </div>
  );
}
