import styles from './about.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';
import NavBar from '../components/NavBar/NavBar';
import profile from '@/public/images/profile.jpg';

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
            <p className={cx('introduction')}>
              <strong className={cx('highlight', 'introduction')}>
                Soli Jang
              </strong>{' '}
              born in 1996 in South Korea, relocated to Berlin in 2018 to
              broaden their artistic horizons. With a solid foundation in
              Fashion Design, gained from Chung-Ang University, Soli developed a
              keen eye for detail and a strong sense of aesthetics. In 2022,
              they embarked on a new chapter in their creative journey by
              pursuing Stage Design at the prestigious Universität der Künste
              Berlin.
            </p>
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
                <p className={cx('description-2')}>
                  <strong className={cx('highlight')}>Since 2023,</strong> Soli
                  has actively contributed to a diverse range of productions
                  strongning theater, musicals, dance performances, and film.
                  This extensive experience has allowed them to refine their
                  skills in storytelling through visual mediums, further
                  enriching their artistic repertoire.
                </p>
                <p className={cx('description-3')}>
                  <strong className={cx('highlight')}>Currently,</strong> Soli
                  is a core member of Team ZINADA, where they serve as both a
                  Stage and Costume Designer. In this role, they collaborate
                  with fellow creatives to bring compelling narratives to life
                  through immersive and innovative design.
                </p>
                <p className={cx('description-4')}>
                  <strong className={cx('highlight')}>
                    As a Scenographer,
                  </strong>{' '}
                  Costume Designer, and Performer, Soli's work reflects a
                  dynamic interplay of storytelling and visual artistry, often
                  exploring themes that resonate deeply with contemporary
                  audiences. Passionate about innovation and collaboration, Soli
                  continually seeks to merge different artistic disciplines,
                  crafting impactful experiences that leave a lasting
                  impression.
                </p>
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
