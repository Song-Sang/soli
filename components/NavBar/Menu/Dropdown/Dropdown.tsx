import Link from 'next/link';
import styles from './Dropdown.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface DropdownProps {
  isOpen: boolean;
  onMouseOver: () => void;
  onMouseOut: () => void;
}

export default function Dropdown({
  isOpen,
  onMouseOver,
  onMouseOut,
}: DropdownProps) {
  return (
    <div
      className={cx('dropdown-container', { open: isOpen })}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <Link className={cx('dropdown-item')} href="works/stage">
        • Stage & Costume
      </Link>
      <Link className={cx('dropdown-item')} href="works/costume">
        • Artwork & Performance
      </Link>
    </div>
  );
}
