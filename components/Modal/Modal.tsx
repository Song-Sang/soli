import styles from './Modal.module.scss';
import classNames from 'classnames/bind';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
}

const cx = classNames.bind(styles);

export default function Modal({ isOpen, onClose, imageSrc }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={cx('modal-overlay')} onClick={onClose}>
      <div className={cx('modal-content')} onClick={(e) => e.stopPropagation()}>
        <img src={imageSrc} alt="Modal Content" className={cx('modal-image')} />
      </div>
    </div>
  );
}
