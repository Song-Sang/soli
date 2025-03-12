import styles from './MainTopic.module.scss';
import classNames from 'classnames/bind';
import SubTopic from '../SubTopic/SubTopic';
import { editWorksData } from '../../../utils/editWorksData';
import { WORKS_DATA } from '../../../constant/WORKS_DATA';

const cx = classNames.bind(styles);

export default function StageCostume() {
  const { stage, costume } = WORKS_DATA;

  const combinedWorksData: WORKS_DATA_INNER[] = [...stage, ...costume];
  const stageCostumeData = editWorksData(combinedWorksData);

  return (
    <div className={cx('mainTopic-wrapper')}>
      {stageCostumeData.map((data) => (
        <SubTopic
          key={data.title}
          title={data.title}
          category={data.category}
          summary={data.summary}
        />
      ))}
    </div>
  );
}
