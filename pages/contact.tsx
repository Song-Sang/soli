import styles from './contact.module.scss';
import classNames from 'classnames/bind';
import NavBar from '../components/NavBar/NavBar';
import InputForm from '../components/ContactPage/InputForm/InputForm';

const cx = classNames.bind(styles);

export default function Contact() {
  return (
    <div className={cx('contact-wrapper')}>
      <div className={cx('contact-container')}>
        <NavBar />
        <main className={cx('contact-main')}>
          <h1 className={cx('contact-title')}>CONTACT</h1>
          {/* <div className={cx('contact-filed')}> */}
          <InputForm />
          {/* </div> */}
        </main>
      </div>
    </div>
  );
}
