import styles from './contact.module.scss';
import classNames from 'classnames/bind';
import NavBar from '../components/NavBar/NavBar';
import InputForm from '../components/ContactPage/InputForm/InputForm';
import Image from 'next/image';
import urlImg from '@/public/images/icon/url.svg';
import instagramImg from '@/public/images/icon/instagram.svg';
import { copyURL } from '../utils/copyURL';

const cx = classNames.bind(styles);

export default function Contact() {
  return (
    <div className={cx('wrapper')}>
      <NavBar />
      <div className={cx('main-wrapper')}>
        <main className={cx('main')}>
          <h1 className={cx('title')}>CONTACT</h1>
          <section className={cx('description-container')}>
            <div className={cx('info-container')}>
              <h2 className={cx('info-title')}>direct contact</h2>
              <p className={cx('info', 'email')}>solijang.art @ gmail.com</p>
              <p className={cx('info', 'phone')}>+49) 17643404489</p>

              <div className={cx('icon-container')}>
                <div className={cx('icon')} onClick={copyURL}>
                  <Image src={urlImg} alt="url 아이콘" width={30} height={30} />
                </div>
                <a
                  href="https://www.instagram.com/solijang.art"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={cx('icon')}>
                    <Image
                      src={instagramImg}
                      alt="instagram 아이콘"
                      width={30}
                      height={30}
                    />
                  </div>
                </a>
              </div>
            </div>
          </section>

          <div className={cx('divider')}></div>

          <div className={cx('input-form')}>
            <InputForm />
          </div>
        </main>
      </div>
    </div>
  );
}
