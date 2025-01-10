import styles from './MainTopic.module.scss';
import classNames from 'classnames/bind';
import SubTopic from '../SubTopic/SubTopic';
import { TOPICS } from '../../../constant/topics';

const cx = classNames.bind(styles);

export default function StageCostume() {
  return (
    <div className={cx('mainTopic-wrapper')}>
      <h1 className={cx('mainTopic')}>
        <div className={cx('mainTopic-container', 'reverse')}>
          <p className={cx('mainTopic-inner', 'reverse')}>STAGE & COSTUME</p>
        </div>
      </h1>
      <hr className={cx('style-line-3')} />
      <hr className={cx('style-line-4')} />
      <div>
        {TOPICS.STAGE_COSTUME.map((topic) => (
          <SubTopic
            key={topic.id}
            title={topic.title}
            category={topic.category}
            description={topic.description}
            align="reverse"
          />
        ))}
      </div>
    </div>
  );
}
