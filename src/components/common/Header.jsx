import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowForward } from 'react-icons/io5';
import styles from './Header.module.css';

const Header = ({ 
  title, 
  showBack = false, 
  onBack = null,
  action = null 
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        {showBack && (
          <button className={styles.backButton} onClick={handleBack}>
            <IoArrowForward size={24} />
          </button>
        )}
        <h1 className={styles.title}>{title}</h1>
        {action && <div className={styles.action}>{action}</div>}
      </div>
    </header>
  );
};

export default Header;
