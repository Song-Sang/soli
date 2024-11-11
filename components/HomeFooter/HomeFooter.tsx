import styles from './HomeFooter.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function HomeFooter() {
  return (
    <div className={cx('HomeFooter-container')}>
      <div>홈 하단 바</div>;
    </div>
  );
}
