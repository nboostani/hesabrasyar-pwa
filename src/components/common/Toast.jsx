import React, { useEffect } from 'react';
import { IoCheckmarkCircle, IoCloseCircle, IoWarning, IoInformationCircle, IoClose } from 'react-icons/io5';
import styles from './Toast.module.css';

const Toast = ({ toast, onClose }) => {
  const { id, message, type, duration } = toast;

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose(id);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [id, duration, onClose]);

  const icons = {
    success: <IoCheckmarkCircle size={24} />,
    error: <IoCloseCircle size={24} />,
    warning: <IoWarning size={24} />,
    info: <IoInformationCircle size={24} />
  };

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <div className={styles.icon}>{icons[type]}</div>
      <div className={styles.message}>{message}</div>
      <button className={styles.closeButton} onClick={() => onClose(id)}>
        <IoClose size={20} />
      </button>
    </div>
  );
};

const ToastContainer = ({ toasts, onClose }) => {
  if (toasts.length === 0) return null;

  return (
    <div className={styles.container}>
      {toasts.map(toast => (
        <Toast key={toast.id} toast={toast} onClose={onClose} />
      ))}
    </div>
  );
};

export default ToastContainer;
