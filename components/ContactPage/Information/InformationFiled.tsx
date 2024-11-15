import styles from './InformationFiled.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function InformationFiled() {
  return (
    <>
      <div className={cx('informationFiled-container')}></div>
    </>
  );
}
