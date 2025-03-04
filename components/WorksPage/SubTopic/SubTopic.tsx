import Link from 'next/link';
import styles from './SubTopic.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

const cx = classNames.bind(styles);

interface SubTopicProps {
  title: string;
  category: string;
  summary: string | string[];
  align?: 'reverse';
}

export default function SubTopic({ title, category, summary }: SubTopicProps) {
  const UrlCategory = category.split(',')[0].trim();

  const [selectTopic, setSelectTopic] = useState('');

  const handleSubTopicClick = (subTopic: string) => {
    setSelectTopic(subTopic);
  };

  return (
    <Link
      href={`/projects/${UrlCategory}/${title}`}
      className={cx('topic-wrapper', { select: selectTopic })}
      onClick={() => handleSubTopicClick(title)}
    >
      <div className={cx('title')}>{title}</div>
      <div className={cx('topic-details')}>
        <p className={cx('category')}>{category}</p>
        <p className={cx('description')}>{summary}</p>
      </div>
    </Link>
  );
}
