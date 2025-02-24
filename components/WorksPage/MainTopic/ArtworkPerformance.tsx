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
      {artworkPerformanceData.map((data) => (
        <SubTopic
          key={data.title}
          title={data.title}
          category={data.category}
          summary={data.summary}
          align="reverse"
        />
      ))}
    </div>
  );
}
