import NavBar from '../components/NavBar/NavBar';
import WorksMain from '../components/WorksPage/WorksMain';
import styles from './works.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Works() {
  return (
    <div className={cx('works-wrapper')}>
      <nav className={cx('nav-wrapper')}>
        <NavBar />
      </nav>
      <div>
        <WorksMain />
      </div>
    </div>
  );
}
