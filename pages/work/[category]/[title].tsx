import styles from './title.module.scss';
import classNames from 'classnames/bind';
import NavBar from '../../../components/NavBar/NavBar';
import { WORKS_DATA } from '../../../constant/WORKS_DATA';
import { GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import People from '../../../components/Title/People/People';
import { useState } from 'react';

const cx = classNames.bind(styles);

interface WorkPageProps {
  workData: WORKS_DATA_INNER | null;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { category, title } = context.query;

  const categoryString =
    typeof category === 'string' ? category.split(',')[0] : null;
  const works = categoryString ? WORKS_DATA[categoryString] : null;
  const workData = works?.find((work) => work.title === title) || null;

  return {
    props: {
      workData,
    },
  };
}

export default function WorkPage({ workData }: WorkPageProps) {
  const images = workData?.images || [];

  const [imgRolling, setImgRolling] = useState(true);
  const onRollingStop = () => setImgRolling(false);
  const onRollingRun = () => setImgRolling(true);

  let titleWords;

  // 분리 필요
  if (workData?.title === 'Forest love : Meeting once') {
    titleWords = workData?.title.split(/:\s*/) || [];
    titleWords[0] += ' :';
  } else {
    titleWords = workData?.title.split(' ') || [];
  }

  return (
    <>
      <nav className={cx('nav')}>
        <NavBar />
      </nav>
      <div className={cx('main')}>
        <div className={cx('description-section')}>
          <h1 className={cx('title')}>
            {titleWords.map((word, index) => (
              <p key={index} className={cx('title-word')}>
                {word}
              </p>
            ))}
          </h1>
          <div className={cx('category-summary-container')}>
            <h2 className={cx('category')}>{workData?.category}</h2>
            <p className={cx('summary')}>{workData?.summary}</p>
          </div>
          <div className={cx('content')}>
            {workData?.content.map((word, index) => (
              <p key={index} className={cx('content-word')}>
                {word}
              </p>
            ))}
          </div>
        </div>

        <div className={cx('wrapper')}>
          <div className={cx('slide-container')}>
            <ul
              className={cx('slide-wrapper')}
              onMouseEnter={onRollingStop}
              onMouseLeave={onRollingRun}
            >
              <div className={cx('slide', 'original', { stop: !imgRolling })}>
                {images.map((image, index) => (
                  <li
                    key={index}
                    className={cx({
                      big: index % 2 === 0,
                      small: index % 2 !== 0,
                    })}
                  >
                    <Image
                      className={cx('image')}
                      width={1000}
                      height={1000}
                      src={image}
                      alt="아"
                    />
                  </li>
                ))}
              </div>
              <div className={cx('slide', 'clone', { stop: !imgRolling })}>
                {images.map((image, index) => (
                  <li
                    key={index}
                    className={cx({
                      big: index % 2 === 0,
                      small: index % 2 !== 0,
                    })}
                  >
                    <Image
                      className={cx('image')}
                      width={1000}
                      height={1000}
                      src={image}
                      alt="아"
                    />
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>

        <div>
          <People workData={workData} />
        </div>
      </div>
    </>
  );
}
