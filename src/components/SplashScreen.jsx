import React, { useEffect, useState } from 'react';
import LoadingSpinner from './common/LoadingSpinner';
import styles from './SplashScreen.module.css';

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300); // Wait for fade out animation
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`${styles.splash} ${!isVisible ? styles.fadeOut : ''}`}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          {/* Hesabrasyar Logo */}
          <div className={styles.logoPlaceholder}>
            <img src="/hesabrasyar-pwa/logo-512x512.svg" alt="Hesabrasyar Logo" width="120" height="120" />
          </div>
        </div>
        <h1 className={styles.appName}>حسابرسیار</h1>
        <p className={styles.tagline}>سامانه مدیریت اسناد و اسکن موبایل</p>
        <div className={styles.spinnerContainer}>
          <LoadingSpinner size="medium" />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
