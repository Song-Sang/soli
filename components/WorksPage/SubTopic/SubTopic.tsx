import Link from 'next/link';
import styles from './SubTopic.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface SubTopicProps {
  title: string;
  description: string;
  align?: 'start' | 'end';
}

export default function SubTopic({
  title,
  description,
  align = 'start',
}: SubTopicProps) {
  return (
    <div>
      <Link href="/" className={cx('Topic', { [`align-${align}`]: align })}>
        {title}
      </Link>
    </div>
  );
}
