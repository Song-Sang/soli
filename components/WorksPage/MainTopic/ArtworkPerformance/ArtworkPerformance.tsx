import Link from 'next/link';
import styles from './ArtworkPerformance.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function ArtworkPerformance() {
  return (
    <div className={cx('MainTopic-wrapper')}>
      <div className={cx('Topic-container')}>
        <Link href="/" className={cx('Topic')}>
          DENYING THE DRAGON
        </Link>
      </div>
      <div className={cx('Topic-container')}>
        <Link href="/" className={cx('Topic')}>
          EMBODIED
        </Link>
      </div>
      <div className={cx('Topic-container')}>
        <Link href="/" className={cx('Topic')}>
          FOREST LOVE
        </Link>
      </div>
    </div>
  );
}
