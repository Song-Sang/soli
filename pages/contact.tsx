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
    <div className={cx('contact-wrapper')}>
      <div className={cx('contact-container')}>
        <div>
          <NavBar />
        </div>
        <main className={cx('contact-main')}>
          <div className={cx('css-wrapper')}>
            <h1 className={cx('contact-title')}>CONTACT</h1>
            <section className={cx('contact-information')}>
              <div className={cx('information-container')}>
                <h2>DIRECT CONTACT</h2>
                <p>941227_@naver.com</p>
                <p>+82 010 5663 3520</p>
              </div>
              <div className={cx('icon-wrapper')}>
                <button className={cx('icon-container')} onClick={copyURL}>
                  <Image src={urlImg} alt="url 아이콘" width={30} height={30} />
                </button>
                <a
                  href="https://www.instagram.com/sol_2_jang"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={cx('icon-container')}>
                    <Image
                      src={instagramImg}
                      alt="instagram 아이콘"
                      width={30}
                      height={30}
                    />
                  </div>
                </a>
              </div>
            </section>
          </div>
          <section className={cx('form-section')}>
            <InputForm />
          </section>
        </main>
      </div>
    </div>
  );
}
