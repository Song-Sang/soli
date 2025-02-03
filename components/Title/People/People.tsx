import Image from 'next/image';
import styles from './People.module.scss';
import classNames from 'classnames/bind';
import urlImg from '@/public/images/url.svg';
import instagramImg from '@/public/images/instagram.svg';
import { copyURL } from '@/utils/copyURL';
import { ToastContainer } from 'react-toastify';

const cx = classNames.bind(styles);

interface PeoPleProps {
  workData: WORKS_DATA_INNER | null;
}

export default function People({ workData }: PeoPleProps) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('info-wrapper')}>
        <h2 className={cx('section-title')}>Info.</h2>
        <div className={cx('info-container')}>
          <div className={cx('info-detail-wrapper')}>
            <p className={cx('detail', 'title')}>[PHOTO.]</p>
            <p className={cx('detail', 'text-highlights')}>
              {workData?.people.photo}
            </p>
          </div>
          <div className={cx('info-detail-wrapper')}>
            <p className={cx('detail', 'title')}>[PROJECT MEMBER.]</p>
            <p className={cx('detail', 'text-highlights')}>
              {workData?.people.crew.map((crew) => `${crew}`).join(' • ')}
            </p>
          </div>
          <div className={cx('info-detail-wrapper')}>
            <p className={cx('detail', 'title')}>[EXHIBITION PERIOD.]</p>
            <div className={cx('schedule')}>
              {workData?.schedule.map((item, index) => (
                <div
                  key={index}
                  className={cx('schedule-item', {
                    'grid-align': index % 2 !== 0,
                  })}
                >
                  <p className={cx('detail', 'date-location')}>{item.date}</p>
                  <p className={cx('detail', 'date-location')}>
                    {item.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={cx('role-wrapper')}>
        <h2 className={cx('section-title')}>Role.</h2>
        <div className={cx('role-container')}>
          <div className={cx('role-detail-wrapper')}>
            <p className={cx('detail', 'role-title')}>[{workData?.role}.]</p>
            <p className={cx('detail', 'role-name')}>- Soli Jang -</p>
          </div>
          <div className={cx('icons')}>
            <div className={cx('social-copy')}>
              <div className={cx('icon')}>
                <a
                  href="https://www.instagram.com/sol_2_jang"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={instagramImg}
                    alt="instagram 아이콘"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
              <button className={cx('icon')} onClick={copyURL}>
                <Image src={urlImg} alt="url 아이콘" width={30} height={30} />
              </button>
            </div>
            <div className={cx('icon')}>뒤로</div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
