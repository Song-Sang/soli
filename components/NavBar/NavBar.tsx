import Link from 'next/link';
import NavMenu from './Menu/NavMenu';
import styles from './NavBar.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';
import homeImg from '@/public/images/icon/home.svg';

const cx = classNames.bind(styles);

export default function NavBar() {
  return (
    <nav className={cx('nav-container')}>
      <Link href="/">
        <Image src={homeImg} alt="홈 아이콘" width={30} height={30} />
      </Link>
      <NavMenu />
    </nav>
  );
}
