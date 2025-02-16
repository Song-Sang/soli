import styles from './title.module.scss';
import classNames from 'classnames/bind';
import NavBar from '../../../components/NavBar/NavBar';
import { WORKS_DATA } from '../../../constant/WORKS_DATA';
import { GetStaticPaths, GetStaticProps } from 'next';
import People from '../../../components/Title/People/People';
import TitleImages from '../../../components/Title/Images/Images';
import Lottie from 'react-lottie-player';
import circleLottie from '@/public/lottie/circle-animation .json';
import TopScrollButton from '../../../components/TopScrollButton/TopScrollButton';
import { copyURL } from '@/utils/copyURL';
import Modal from '../../../components/Modal/Modal';
import useModalStore from '../../../store/useModalStore';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

interface WorkPageProps {
  workData: WORKS_DATA_INNER | null;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(WORKS_DATA).flatMap((category) =>
    WORKS_DATA[category].map((work) => ({
      params: { category, title: work.title },
    }))
  );

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { category, title } = context.params as {
    category: string;
    title: string;
  };

  const works = WORKS_DATA[category] || [];
  const workData = works.find((work) => work.title === title) || null;

  return {
    props: {
      workData,
    },
  };
};

export default function WorkPage({ workData }: WorkPageProps) {
  const images = workData?.images || [];

  const { isOpen, closeModal } = useModalStore();
  const resetModal = useModalStore((state) => state.reset);

  // 컴포넌트가 언마운트될 때 상태 초기화
  useEffect(() => {
    return () => {
      resetModal();
    };
  }, [resetModal]);

  //모달 스크롤방지
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  let titleWords;

  // 분리 필요
  if (workData?.title === 'Forest love : Meeting once') {
    titleWords = workData?.title.split(/:\s*/) || [];
    titleWords[0] += ' :';
  } else {
    titleWords = workData?.title.split(' ') || [];
  }

  return (
    <div>
      <NavBar />
      <div className={cx('main')}>
        <div className={cx('description-section')}>
          <h1 className={cx('title')}>
            {titleWords.map((word, index) => (
              <p key={index} className={cx('title-word')}>
                {word}
              </p>
            ))}
            <Lottie
              loop
              animationData={circleLottie}
              play
              className={cx('circle-lottie')}
            />
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
        <TitleImages images={images} />
        <People workData={workData} onClick={copyURL} />
        <footer className={cx('footer')}>
          <p>BASED IN BERLIN, GERMANY</p>
          <p className={cx('year')}>@2023 - 2025</p>
        </footer>
      </div>
      {isOpen && (
        <div className={cx('modal')}>
          <Modal isOpen={isOpen} onClose={closeModal} images={images} />
        </div>
      )}
      <TopScrollButton />
    </div>
  );
}
