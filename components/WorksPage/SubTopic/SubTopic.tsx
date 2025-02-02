import Link from 'next/link';
import styles from './SubTopic.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface SubTopicProps {
  title: string;
  category: string;
  summary: string | string[];
  align?: 'reverse';
}

export default function SubTopic({
  title,
  category,
  summary,
  align,
}: SubTopicProps) {
  return (
    <div>
      <Link
        href={`/work/${category}/${title}`}
        className={cx('topic-wrapper', { reverse: align === 'reverse' })}
      >
        <h2 className={cx('title', { reverse: align === 'reverse' })}>
          {title}
        </h2>
        <div className={cx('topic-details', { reverse: align === 'reverse' })}>
          <p className={cx('category')}>{category}</p>
          <p className={cx('description')}>{summary}</p>
        </div>
      </Link>
    </div>
  );
}
