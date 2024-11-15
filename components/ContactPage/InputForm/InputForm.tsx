import { useRef, useState } from 'react';
import styles from './InputForm.module.scss';
import classNames from 'classnames/bind';
import { validateFields, ValidationErrors } from '../../../utils/validation';
import 'react-toastify/dist/ReactToastify.css';
import { sendEmail } from '../../../utils/sendEmail';

const cx = classNames.bind(styles);

export default function InputForm() {
  const form = useRef<HTMLFormElement>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<ValidationErrors>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors = validateFields(name, email, phone, message);
    setErrors(validationErrors);

    if (
      validationErrors.name ||
      validationErrors.email ||
      validationErrors.phone ||
      validationErrors.message
    )
      return;

    if (form.current) {
      sendEmail(form.current);
    }
  };

  return (
    <>
      <form className={cx('form-wrapper')} ref={form} onSubmit={handleSubmit}>
        <h2 className={cx('form-title')}>FEEDBACK FORM</h2>
        <div className={cx('form-container')}>
          <div className={cx('input-wrapper')}>
            <div className={cx('input-container')}>
              <label className={cx('label', { 'error-box': errors.name })}>
                Name *
              </label>
              <input
                className={cx('input')}
                type="text"
                name="from_name"
                placeholder=" Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={cx('input-container')}>
              <label className={cx('label', { 'error-box': errors.email })}>
                E-mail *
              </label>
              <input
                className={cx('input')}
                type="text"
                name="from_email"
                placeholder=" E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={cx('input-container')}>
              <label className={cx('label', { 'error-box': errors.phone })}>
                Phone
              </label>
              <input
                className={cx('input')}
                type="text"
                name="phone"
                placeholder=" phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className={cx('input-container', 'textarea-container')}>
              <label className={cx('label', { 'error-box': errors.message })}>
                Message *
              </label>
              <textarea
                className={cx('textarea')}
                name="message"
                placeholder=" Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          <div className={cx('input-footer')}>
            <div>
              {errors.name && <p className={cx('error')}>{errors.name}</p>}
              {errors.email && <p className={cx('error')}>{errors.email}</p>}
              {errors.phone && <p className={cx('error')}>{errors.phone}</p>}
              {errors.message && (
                <p className={cx('error')}>{errors.message}</p>
              )}
            </div>
            <button className={cx('button')} type="submit">
              SEND MESSAGE
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
