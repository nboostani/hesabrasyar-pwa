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
          {/* Logo placeholder - can be replaced with actual logo */}
          <div className={styles.logoPlaceholder}>
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="45" fill="#EF5530" opacity="0.1"/>
              <circle cx="50" cy="50" r="35" fill="#EF5530" opacity="0.2"/>
              <circle cx="50" cy="50" r="25" fill="#EF5530"/>
              <path d="M50 35 L65 50 L50 65 L35 50 Z" fill="white"/>
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
