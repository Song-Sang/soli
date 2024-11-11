import NavMenu from './Menu/NavMenu';
import styles from './NavBar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function NavBar() {
  return (
    <nav className={cx('nav-container')}>
      <button>홈 버튼</button>
      <NavMenu />
    </nav>
  );
}
