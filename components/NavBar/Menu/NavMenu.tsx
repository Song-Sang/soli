import styles from './NavMenu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function NavMenu() {
  return (
    <div className={cx('navMenu-container')}>
      <div>메뉴1</div>
      <div>메뉴2</div>
      <div>메뉴3</div>
    </div>
  );
}
