import Link from 'next/link';
import styles from './NavMenu.module.scss';
import classNames from 'classnames/bind';
import { useRouter } from 'next/router';
import Lottie from 'react-lottie-player';
import LineLottie from '@/public/lottie/home-line-animation.json';

const cx = classNames.bind(styles);

interface NavMenuProps {
  mobile?: boolean;
  mobileMenuVisible?: boolean;
}

export default function NavMenu({ mobile, mobileMenuVisible }: NavMenuProps) {
  const router = useRouter();
  const { pathname } = router;

  const currentMenu = pathname.split('/')[1];

  return (
    <div className={cx('navMenu-container')}>
      <Link
        href="/projects"
        className={cx('menu', { highlight: currentMenu === 'projects' })}
      >
        projects
        {currentMenu === 'projects' && (
          <Lottie
            play={true}
            loop={false}
            animationData={LineLottie}
            className={cx(
              'line-lottie',
              { mobile: mobile },
              { able: mobileMenuVisible }
            )}
          />
        )}
      </Link>
      <Link
        href="/about"
        className={cx('menu', { highlight: currentMenu === 'about' })}
      >
        about
        {currentMenu === 'about' && (
          <Lottie
            play={true}
            loop={false}
            animationData={LineLottie}
            className={cx('line-lottie')}
            speed={1.5}
          />
        )}
      </Link>

      <Link
        href="/contact"
        className={cx('menu', { highlight: currentMenu === 'contact' })}
      >
        contact
        {currentMenu === 'contact' && (
          <Lottie
            play={true}
            loop={false}
            animationData={LineLottie}
            className={cx('line-lottie')}
          />
        )}
      </Link>
    </div>
  );
}
