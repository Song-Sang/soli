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
  const UrlCategory = category.split(',')[0].trim();

  return (
    <Link
      href={`/projects/${UrlCategory}/${title}`}
      className={cx('topic-wrapper', { reverse: align === 'reverse' })}
    >
      <div className={cx('title', { reverse: align === 'reverse' })}>
        {title}
      </div>
      <div className={cx('border', { reverse: align === 'reverse' })}></div>
      <div className={cx('topic-details', { reverse: align === 'reverse' })}>
        <p className={cx('category')}>{category}</p>
        <p className={cx('description')}>{summary}</p>
      </div>
    </Link>
  );
}
