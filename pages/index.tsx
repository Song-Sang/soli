import styles from './index.module.scss';
import classNames from 'classnames/bind';
import NavBar from '../components/NavBar/NavBar';
import HomeImages from '../components/HomeImages/HomeImages';

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <div className={cx('home-wrapper')}>
      <div className={cx('image-helper')}>
        <main className={cx('home-container')}>
          <NavBar />
          <div className={cx('title-container')}>
            <p className={cx('sub-title')}>Scenographer</p>
            <h1 className={cx('title')}>SOLI JANG</h1>
            <p className={cx('Tertiary-title')}>More Information</p>
          </div>
        </main>
        <section className={cx('image-section-first')}>
          <HomeImages blockNumber={1} />
        </section>
      </div>
      <div className={cx('image-sections')}>
        <section className={cx('image-section-second')}>
          <HomeImages blockNumber={2} />
        </section>
        <section className={cx('image-section-third')}>
          <HomeImages blockNumber={3} />
        </section>
      </div>
    </div>
  );
}
