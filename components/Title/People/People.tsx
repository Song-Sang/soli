import Image from 'next/image';
import styles from './People.module.scss';
import classNames from 'classnames/bind';
import urlImg from '@/public/images/icon/url.svg';
import instagramImg from '@/public/images/icon/instagram.svg';
import email from '@/public/images/icon/email.svg';
import Link from 'next/link';

const cx = classNames.bind(styles);

interface PeoPleProps {
  workData: WORKS_DATA_INNER | null;
  onClick: () => Promise<void>;
}

export default function People({ workData, onClick }: PeoPleProps) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('role-wrapper')}>
        <h2 className={cx('section-title', 'role')}>ROLE</h2>
        <div className={cx('role-container')}>
          <div className={cx('detail-container')}>
            <h3 className={cx('semi-title')}>[MAIN ROLE]</h3>
            <div className={cx('role-item-container')}>
              {workData?.roles.map((role, index) => (
                <div key={index} className={cx('my-role-item')}>
                  <p className={cx('detail')}>{role}</p>
                  <p className={cx('detail')}>- Soli Jang -</p>
                </div>
              ))}
            </div>
          </div>

          <div className={cx('detail-container')}>
            <h3 className={cx('semi-title')}>[PRODUCTION MEMBER]</h3>
            <div className={cx('role-item-container')}>
              {workData?.productions.map((production, index) => (
                <div key={index} className={cx('crew-item')}>
                  <p className={cx('detail')}>{production.role}</p>
                  <p className={cx('detail', 'crew')}>
                    {production.names.join(' • ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {workData?.performers && (
            <div>
              {workData.performers.map((performer, index) => (
                <div key={index} className={cx('detail-container')}>
                  <h3 className={cx('semi-title')}>[{performer.role}]</h3>
                  <p className={cx('detail', 'performer')}>
                    {performer.names.join(' • ')}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={cx('section-wrapper')}>
        <div className={cx('info-wrapper')}>
          <h2 className={cx('section-title', 'info')}>Info</h2>
          <div className={cx('info-container')}>
            <div className={cx('detail-container')}>
              <h3 className={cx('semi-title')}>[PHOTO]</h3>
              <p className={cx('detail', 'photo')}>
                {workData?.photo ? workData.photo : '-'}
              </p>
            </div>

            <div className={cx('detail-container')}>
              <h3 className={cx('semi-title')}>[EXHIBITION PERIOD]</h3>
              <div className={cx('schedule')}>
                {workData?.schedule.map((item, index) => (
                  <div key={index} className={cx('schedule-item')}>
                    <p
                      className={cx('detail', 'date-location', {
                        'grid-align': index % 2 !== 0,
                      })}
                    >
                      {item.date}
                    </p>
                    <p
                      className={cx('detail', 'date-location', {
                        'grid-align': index % 2 !== 0,
                      })}
                    >
                      {item.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={cx('contact-wrapper')}>
          <h2 className={cx('section-title', 'contact')}>CONTACT</h2>
          <div className={cx('contact-container')}>
            <div className={cx('icons')}>
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
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
                <button className={cx('icon')} onClick={onClick}>
                  <Image src={urlImg} alt="url 아이콘" width={30} height={30} />
                </button>
              </div>
              <div className={cx('icon')}>
                <Link href="/contact">
                  <Image
                    src={email}
                    alt="contact page"
                    width={38}
                    height={38}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
