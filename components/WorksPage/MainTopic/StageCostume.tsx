import styles from './MainTopic.module.scss';
import classNames from 'classnames/bind';
import SubTopic from '../SubTopic/SubTopic';
import { editWorksData } from '../../../utils/editWorksData';
import { WORKS_DATA } from '../../../constant/WORKS_DATA';

const cx = classNames.bind(styles);

export default function StageCostume() {
  const { stage, costume } = WORKS_DATA;

  const combinedWorksData: WORKS_DATA_INNER[] = [...costume, ...stage];
  const stageCostumeData = editWorksData(combinedWorksData);

  return (
    <div className={cx('mainTopic-wrapper')}>
      <h1 className={cx('mainTopic')}>
        <div className={cx('mainTopic-container', 'reverse')}>
          <p className={cx('mainTopic-inner', 'reverse')}>STAGE & COSTUME</p>
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
