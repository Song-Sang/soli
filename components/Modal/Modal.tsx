import Image from 'next/image';
import useModalStore from '../../store/useModalStore';
import styles from './Modal.module.scss';
import classNames from 'classnames/bind';
import prevButton from '@/public/images/icon/prevButton.svg';
import nextButton from '@/public/images/icon/nextButton.svg';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
}

const cx = classNames.bind(styles);

//분리 필요
function getCurrentImage(array: string[], index: number) {
  if (index < 0 || index >= array.length) {
    return undefined;
  }
  return array[index];
}

export default function Modal({ isOpen, onClose, images }: ModalProps) {
  const { currentIndex, previousImage, nextImage } = useModalStore();

  if (!isOpen) return null;

  const imageSrc = getCurrentImage(images, currentIndex);

  return (
    <div className={cx('modal-overlay')} onClick={onClose}>
      <div className={cx('modal-content')}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            previousImage();
          }}
          disabled={currentIndex === 0}
          className={cx('button', 'prev')}
        >
          <Image
            src={prevButton}
            alt="버튼화살표"
            width={30}
            height={30}
            className={cx('prev-button')}
          />
        </button>
        <div
          className={cx('image-container')}
          onClick={(e) => e.stopPropagation()}
        >
          {imageSrc && (
            <Image
              src={imageSrc}
              alt="이미지"
              className={cx('modal-image')}
              width={1}
              height={550}
            />
          )}
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextImage();
          }}
          disabled={currentIndex === images.length - 1}
          className={cx('button', 'next')}
        >
          <Image
            src={nextButton}
            alt="버튼화살표"
            width={30}
            height={30}
            className={cx('next-button')}
          />
        </button>
      </div>
    </div>
  );
}
