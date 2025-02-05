import styles from './MainTopic.module.scss';
import classNames from 'classnames/bind';
import SubTopic from '../SubTopic/SubTopic';
import { WORKS_DATA } from '../../../constant/WORKS_DATA';
import { editWorksData } from '../../../utils/editWorksData';

const cx = classNames.bind(styles);

export default function ArtworkPerformance() {
  const { artwork, performance } = WORKS_DATA;

  const combinedWorksData: WORKS_DATA_INNER[] = [...performance, ...artwork];
  const artworkPerformanceData = editWorksData(combinedWorksData);

  return (
    <div className={cx('mainTopic-wrapper')}>
      <h1 className={cx('mainTopic')}>
        <div className={cx('mainTopic-container')}>
          <p className={cx('mainTopic-inner')}>ARTWORK & PERFORMANCE</p>
        </div>
      </h1>
      <div>
        {artworkPerformanceData.map((data) => (
          <SubTopic
            key={data.title}
            title={data.title}
            category={data.category}
            summary={data.summary}
          />
        ))}
      </div>
    </div>
  );
}
