import Link from 'next/link';
import NavMenu from './Menu/NavMenu';
import styles from './NavBar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function NavBar() {
  return (
    <nav className={cx('nav-container')}>
      <Link href="/" className={cx('home-title')}>
        poRtfolio
      </Link>
      <NavMenu />
    </nav>
  );
}
