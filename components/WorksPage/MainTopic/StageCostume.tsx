import styles from './MainTopic.module.scss';
import classNames from 'classnames/bind';
import SubTopic from '../SubTopic/SubTopic';
import { editWorksData } from '../../../utils/editWorksData';
import { WORKS_DATA } from '../../../constant/WORKS_DATA';
import Image from 'next/image';
import homeCircle from '@/public/images/home-circle.png';

const cx = classNames.bind(styles);

export default function StageCostume() {
  const { stage, costume } = WORKS_DATA;

  const combinedWorksData: WORKS_DATA_INNER[] = [...costume, ...stage];
  const stageCostumeData = editWorksData(combinedWorksData);

  return (
    <div className={cx('mainTopic-wrapper')}>
      <h1 className={cx('mainTopic')}>
        <div className={cx('mainTopic-container', 'reverse')}>
          <p className={cx('title', 'reverse')}>
            Stage / Costume
            <Image
              src={homeCircle}
              width={800}
              height={800}
              alt="동그라미"
              className={cx('circle', 'left')}
            />
          </p>
        </div>
      </h1>
      <div>
        {stageCostumeData.map((data) => (
          <SubTopic
            key={data.title}
            title={data.title}
            category={data.category}
            summary={data.summary}
            align="reverse"
          />
        ))}
      </div>
    </div>
  );
}
