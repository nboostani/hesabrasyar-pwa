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
            <svg width="120" height="120" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <rect x="97" y="140" width="25" height="232" fill="#EF5530"/>
              <rect x="403" y="140" width="25" height="232" fill="#EF5530"/>
              <path d="M212 140 L330 140 L378 188 L330 236 L148 236 L148 188 Z" fill="#EF5530"/>
              <path d="M312 276 L378 324 L312 372 L148 372 L148 324 L212 276 Z" fill="#EF5530"/>
            </svg>
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
