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
import urlImg from '@/public/images/icon/url.svg';
import instagramImg from '@/public/images/icon/instagram.svg';
import email from '@/public/images/icon/email.svg';
import Link from 'next/link';
import { copyURL } from '@/utils/copyURL';

const cx = classNames.bind(styles);

export default function Works() {
  return (
    <div className={cx('wrapper')}>
      <NavBar />

      <div className={cx('profile-wrapper')}>
        <div className={cx('profile-container')}>
          <div className={cx('title-container')}>
            <div>
              <h1 className={cx('title')}>ABOUT</h1>
              <h2 className={cx('subtitle')}>Scenographer</h2>
            </div>
            <div className={cx('info-wrapper')}>
              <div className={cx('info-container', 'name')}>
                <p className={cx('info-label')}>[name]</p>
                <p className={cx('info-detail')}>Soli - Jang</p>
              </div>
              <div className={cx('info-container', 'location')}>
                <p className={cx('info-label')}>[location]</p>
                <p className={cx('info-detail')}>Berlin, Germany</p>
              </div>
              <div className={cx('info-container', 'number')}>
                <p className={cx('info-label')}>[number]</p>
                <p className={cx('info-detail')}>+49) 17643404489</p>
              </div>
              <div className={cx('info-container', 'mail')}>
                <p className={cx('info-label')}>[mail]</p>
                <p className={cx('info-detail')}>solijang.art @ gmail.com</p>
              </div>
            </div>
          </div>
          <div className={cx('main-container')}>
            <Image
              src={profile}
              alt="프로필사진"
              width={630}
              height={890}
              className={cx('profile-image')}
            />
            <div className={cx('description-wrapper')}>
              <h2 className={cx('description-title')}>BIO/CV</h2>
              <div className={cx('description-container')}>
                <p className={cx('description', 'first')}>{DESCRIPTION_1}</p>
                <p className={cx('description', 'second')}>{DESCRIPTION_2}</p>
                <p className={cx('description', 'third')}>{DESCRIPTION_3}</p>
              </div>
            </div>
            <div className={cx('introduction-wrapper')}>
              <div className={cx('introduction-container')}>
                <h2 className={cx('description-title')}>INTRODUCE</h2>
                <p className={cx('introduction')}>{INTRODUCTION}</p>
              </div>
              <div className={cx('contact')}>
                <h2 className={cx('contact-title')}>contact</h2>
                <div className={cx('contact-icon')}>
                  <div className={cx('social-copy')}>
                    <div className={cx('icon')}>
                      <a
                        href="https://www.instagram.com/solijang.art"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={instagramImg}
                          alt="instagram 아이콘"
                          width={35}
                          height={35}
                        />
                      </a>
                    </div>
                    <button className={cx('icon')} onClick={copyURL}>
                      <Image
                        src={urlImg}
                        alt="url 아이콘"
                        width={35}
                        height={35}
                      />
                    </button>
                  </div>
                  <div className={cx('icon')}>
                    <Link href="/contact">
                      <Image
                        src={email}
                        alt="contact page"
                        width={42}
                        height={42}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className={cx('footer')}>
          <p>BASED IN BERLIN, GERMANY</p>
          <p className={cx('year')}>@2023 - 2025</p>
        </footer>
      </div>
    </div>
  );
}
