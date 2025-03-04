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

export default function SubTopic({ title, category, summary }: SubTopicProps) {
  const UrlCategory = category.split(',')[0].trim();

  return (
    <Link
      href={`/projects/${UrlCategory}/${title}`}
      className={cx('topic-wrapper')}
    >
      <div className={cx('title')}>{title}</div>
      <div className={cx('topic-details')}>
        <p className={cx('category')}>{category}</p>
        <p className={cx('description')}>{summary}</p>
      </div>
    </Link>
  );
}
