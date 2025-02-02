import styles from './title.module.scss';
import classNames from 'classnames/bind';
import NavBar from '../../../components/NavBar/NavBar';
import { WORKS_DATA } from '../../../constant/WORKS_DATA';
import { GetServerSidePropsContext } from 'next';
import People from '../../../components/Title/People/People';
import TitleImages from '../../../components/Title/Images/images';

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
      <NavBar />
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
        <TitleImages images={images} />
        <People workData={workData} />
      </div>
    </>
  );
}
