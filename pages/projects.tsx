import NavBar from '../components/NavBar/NavBar';
import WorksMain from '../components/WorksPage/WorksMain';
import styles from './projects.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Works() {
  return (
    <div className={cx('works-css-wrapper')}>
      <div className={cx('works-wrapper')}>
        <NavBar />
        <WorksMain />
      </div>
    </div>
  );
}
