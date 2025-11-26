import React from 'react';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner = ({ size = 'medium', color = 'primary', fullScreen = false }) => {
  const spinnerClasses = [
    styles.spinner,
    styles[size],
    styles[color]
  ].join(' ');

  if (fullScreen) {
    return (
      <div className={styles.fullScreen}>
        <div className={spinnerClasses}></div>
      </div>
    );
  }

  return <div className={spinnerClasses}></div>;
};

export default LoadingSpinner;
