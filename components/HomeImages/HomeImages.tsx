import styles from './HomeImages.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';

import DN from '@/public/images/Stage&Costume/DigitalNomads/DN5.jpg';
import Musikal from '@/public/images/Stage&Costume/Musikal21:58/Musikal7.jpeg';
import DTD from '@/public/images/Artwork&Performance/DenyingTheDragon/DTD2.jpg';
import Embodied from '@/public/images/Artwork&Performance/Embodied/Embodied3.jpg';
import Huabun from '@/public/images/Stage&Costume/Huabun/Huabun1.jpg';
import RichFamily from '@/public/images/Stage&Costume/RichFamily/RichFamily6.jpg';

const cx = classNames.bind(styles);

interface HomeImagesProps {
  blockNumber: 1 | 2 | 3;
}

export default function HomeImages({ blockNumber }: HomeImagesProps) {
  const images = {
    1: [{ src: Musikal, description: 'Musikal 21:58' }],
    2: [
      { src: DTD, description: 'Denying The Dragon' },
      { src: DN, description: 'Digital Nomads' },
    ],
    3: [
      { src: Embodied, description: 'Embodied' },
      { src: RichFamily, description: 'Rich Family' },
    ],
  };

  const selectedImages = images[blockNumber] || [];

  return (
    <div className={cx('images-container')}>
      {selectedImages.map((imageObj, index) => (
        <div key={index} className={cx('image-wrapper')}>
          <Image
            className={cx('image')}
            src={imageObj.src}
            alt={`Image ${index + 1}`}
            width={390}
            height={570}
          />
          <div className={cx('image-info')}>{imageObj.description}</div>
        </div>
      ))}
    </div>
  );
}
