import Link from 'next/link';
import styles from './StageCostume.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function StageCostume() {
  return (
    <div className={cx('MainTopic-wrapper')}>
      <div className={cx('Topic-container')}>
        <Link href="/" className={cx('Topic')}>
          RICH FAMILY
        </Link>
      </div>
      <div className={cx('Topic-container')}>
        <Link href="/" className={cx('Topic')}>
          MUSIKAL 21:58
        </Link>
      </div>
      <div className={cx('Topic-container')}>
        <Link href="/" className={cx('Topic')}>
          HUABUN
        </Link>
      </div>
      <div className={cx('Topic-container')}>
        <Link href="/" className={cx('Topic')}>
          DIGITAL NOMADS
        </Link>
      </div>
      <div className={cx('Topic-container')}>
        <Link href="/" className={cx('Topic')}>
          WUW
        </Link>
      </div>
    </div>
  );
}
