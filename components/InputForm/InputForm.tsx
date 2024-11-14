import { useState } from 'react';
import styles from './InputForm.module.scss';
import classNames from 'classnames/bind';
import { validateFields, ValidationErrors } from '../../utils/validation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);

export default function InputForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<ValidationErrors>({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors = validateFields(name, email, message);
    setErrors(validationErrors);

    if (
      !validationErrors.name &&
      !validationErrors.email &&
      !validationErrors.message
    ) {
      console.log('폼 제출:', { name, email, message });
      toast.success('completed', { autoClose: 2000 });
    }
  };

  return (
    <>
      <form className={cx('form-wrapper')} onSubmit={handleSubmit}>
        <div className={cx('form-container')}>
          <div className={cx('input-container')}>
            <label className={cx('label')}>Name</label>
            <input
              className={cx('input', { 'error-box': errors.name })}
              type="text"
              name="from_name"
              placeholder=" name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={cx('input-container')}>
            <label className={cx('label')}>E-mail</label>
            <input
              className={cx('input', { 'error-box': errors.email })}
              type="text"
              name="from_email"
              placeholder=" e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={cx('input-container', 'textarea-container')}>
            <label className={cx('label')}>Message </label>
            <textarea
              className={cx('textarea', { 'error-box': errors.message })}
              name="message"
              placeholder=" message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className={cx('input-footer')}>
            <div>
              {errors.message && (
                <p className={cx('error')}>{errors.message}</p>
              )}
              {errors.email && <p className={cx('error')}>{errors.email}</p>}
              {errors.name && <p className={cx('error')}>{errors.name}</p>}
            </div>
            <button className={cx('button')} type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}
