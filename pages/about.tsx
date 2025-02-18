import styles from './about.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';
import NavBar from '../components/NavBar/NavBar';
import profile from '@/public/images/profile.webp';
import {
  DESCRIPTION_1,
  DESCRIPTION_2,
  DESCRIPTION_3,
  INTRODUCTION,
} from '../constant/constant';

const cx = classNames.bind(styles);

export default function Works() {
  return (
    <div>
      <NavBar />
      <div className={cx('wrapper')}>
        <div className={cx('profile-container')}>
          <div className={cx('title-container')}>
            <h1 className={cx('title')}>ABOUT</h1>
            <h2 className={cx('subtitle')}>Scenographer</h2>
          </div>
          <div className={cx('main-container')}>
            <p className={cx('introduction')}>{INTRODUCTION}</p>
            <div className={cx('info-description-container')}>
              <div className={cx('info-wrapper')}>
                <div className={cx('info-container')}>
                  <p className={cx('info-label')}>[name.]</p>
                  <p className={cx('info-detail')}>Soli - Jang</p>
                </div>
                <div className={cx('info-container')}>
                  <p className={cx('info-label')}>[location.]</p>
                  <p className={cx('info-detail')}>Berlin, Germany</p>
                </div>
                <div className={cx('info-container')}>
                  <p className={cx('info-label')}>[Info.]</p>
                  <p className={cx('info-detail')}>+82 10-5663-3520</p>
                  <p className={cx('info-detail')}>941227_@naver.com</p>
                </div>
              </div>
              <div className={cx('description-container')}>
                <p className={cx('description-1')}>{DESCRIPTION_1}</p>
                <p className={cx('description-2')}>{DESCRIPTION_2}</p>
                <p className={cx('description-3')}>{DESCRIPTION_3}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('profile-wrapper')}>
          <Image
            src={profile}
            alt="프로필사진"
            width={630}
            height={890}
            className={cx('profile-image')}
          />
        </div>
      </div>
    </div>
  );
}
