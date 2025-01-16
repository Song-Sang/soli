import styles from './title.module.scss';
import classNames from 'classnames/bind';

import { useRouter } from 'next/router';
import { WORKS_IMAGES_DATA } from '../../constant/workImages';
import Image from 'next/image';
import NavBar from '../../components/NavBar/NavBar';

const cx = classNames.bind(styles);

export default function WorkPage() {
  const router = useRouter();
  const { title } = router.query;

  const work = WORKS_IMAGES_DATA.ART_PERFORMANCE.find(
    (work) => work.title === title
  );
  const images = work ? work.images : [];

  console.log(WORKS_IMAGES_DATA.ART_PERFORMANCE);

  return (
    <>
      <nav className={cx('nav')}>
        <NavBar />
      </nav>
      <div className={cx('title-wrapper')}>
        <div>
          {images.map((image, index) => (
            <Image width={200} height={300} key={index} src={image} alt="아" />
          ))}
        </div>
      </div>
    </>
  );
}
