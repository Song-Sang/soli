import styles from './MainTopic.module.scss';
import classNames from 'classnames/bind';
import SubTopic from '../SubTopic/SubTopic';
import { TOPICS } from '../../../constant/topics';

const cx = classNames.bind(styles);

export default function StageCostume() {
  return (
    <div className={cx('MainTopic-wrapper')}>
      {TOPICS.STAGE_COSTUME.map((topic) => (
        <SubTopic
          key={topic.id}
          title={topic.title}
          description={topic.description}
          align="end"
        />
      ))}
    </div>
  );
}
