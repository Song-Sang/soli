import { useState } from 'react';
import Link from 'next/link';
import styles from './NavMenu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function NavMenu() {
  return (
    <div className={cx('navMenu-container')}>
      <Link href="/works">projects</Link>
      <Link href="/introduction">about</Link>
      <Link href="/contact">contact</Link>
    </div>
  );
}
