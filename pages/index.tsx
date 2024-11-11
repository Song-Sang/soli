import styles from '@/styles/pages/Home.module.scss';
import classNames from 'classnames/bind';
import NavBar from '../components/NavBar/NavBar';

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <main className={cx('home-container')}>
      <section className={cx('home-content')}>
        <NavBar />
        <div className={cx('main')}>
          <p className={cx('sub-title')}>Scenographer</p>
          <h1 className={cx('title')}>SOLI JANG</h1>
          <p className={cx('since')}>2022 - 2025</p>
        </div>
      </section>
      <section className={cx('home-images')}>그림영역</section>
    </main>
  );
}
