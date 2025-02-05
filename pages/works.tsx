import NavBar from '../components/NavBar/NavBar';
import WorksMain from '../components/WorksPage/WorksMain';
import styles from './works.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Works() {
  return (
    <div className={cx('works-wrapper')}>
      <NavBar />
      <div>
        <WorksMain />
      </div>
    </div>
  );
}
