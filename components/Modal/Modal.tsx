import Image from 'next/image';
import useModalStore from '../../store/useModalStore';
import styles from './Modal.module.scss';
import classNames from 'classnames/bind';
import nextButton from '@/public/images/icon/nextButton.svg';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: any;
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
  if (!isOpen) return null;

  const { currentIndex, previousImage, nextImage } = useModalStore();

  const imageSrc = getCurrentImage(images, currentIndex);

  return (
    <div className={cx('modal-overlay')} onClick={onClose}>
      <div className={cx('modal-content')} onClick={(e) => e.stopPropagation()}>
        <button
          onClick={previousImage}
          disabled={currentIndex === 0}
          className={cx('button', 'prev')}
        >
          <Image
            src={nextButton}
            alt="버튼화살표"
            width={30}
            height={30}
            className={cx('prev-button')}
          />
        </button>
        <img src={imageSrc} alt="이미지" className={cx('modal-image')} />
        <button
          onClick={nextImage}
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
