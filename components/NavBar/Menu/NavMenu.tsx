import { useState } from 'react';
import Link from 'next/link';
import styles from './NavMenu.module.scss';
import classNames from 'classnames/bind';
import Dropdown from './Dropdown/Dropdown';

const cx = classNames.bind(styles);

export default function NavMenu() {
  return (
    <div className={cx('navMenu-container')}>
      <Link href="/works">WORKS</Link>
      <Link href="/introduction">BIO/CV</Link>
      <Link href="/contact">CONTACT</Link>
    </div>
  );
}
