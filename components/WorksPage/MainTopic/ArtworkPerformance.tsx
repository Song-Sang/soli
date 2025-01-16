import styles from './MainTopic.module.scss';
import classNames from 'classnames/bind';
import SubTopic from '../SubTopic/SubTopic';
import { TOPICS } from '../../../constant/topics';

const cx = classNames.bind(styles);

export default function ArtworkPerformance() {
  return (
    <div className={cx('mainTopic-wrapper')}>
      <h1 className={cx('mainTopic')}>
        <div className={cx('mainTopic-container')}>
          <p className={cx('mainTopic-inner')}>ARTWORK & PERFORMANCE</p>
        </div>
      </h1>
      <div>
        {TOPICS.ART_PERFORMANCE.map((topic) => (
          <SubTopic
            key={topic.id}
            title={topic.title}
            category={topic.category}
            description={topic.description}
          />
        ))}
      </div>
    </div>
  );
}
