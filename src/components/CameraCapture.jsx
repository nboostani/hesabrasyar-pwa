import React, { useEffect, useState } from 'react';
import { IoCamera, IoSync, IoClose, IoCheckmark, IoFlash } from 'react-icons/io5';
import { useCamera } from '../hooks/useCamera';
import Button from './common/Button';
import LoadingSpinner from './common/LoadingSpinner';
import styles from './CameraCapture.module.css';

const CameraCapture = ({ onCapture, onCancel }) => {
  const {
    videoRef,
    error,
    capturedImage,
    isStreaming,
    startCamera,
    captureImage,
    stopCamera,
    switchCamera,
    resetCapture
  } = useCamera();

  const [isLoading, setIsLoading] = useState(true);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    // Start camera when component mounts
    const initCamera = async () => {
      setIsLoading(true);
      await startCamera('environment');
      setIsLoading(false);
    };

    initCamera();

    // Cleanup on unmount
    return () => {
      stopCamera();
    };
  }, []);

  useEffect(() => {
    if (error) {
      setShowError(true);
    }
  }, [error]);

  const handleCapture = () => {
    captureImage();
  };

  const handleConfirm = () => {
    if (capturedImage) {
      onCapture(capturedImage);
    }
  };

  const handleRetake = () => {
    resetCapture();
    startCamera('environment');
  };

  const handleCancel = () => {
    stopCamera();
    onCancel();
  };

  // Error state
  if (showError && error) {
    return (
      <div className={styles.errorContainer}>
        <div className={styles.errorContent}>
          <IoCamera size={64} className={styles.errorIcon} />
          <h2 className={styles.errorTitle}>خطا در دسترسی به دوربین</h2>
          <p className={styles.errorMessage}>{error}</p>
          <div className={styles.errorActions}>
            <Button onClick={() => window.location.reload()} variant="primary">
              تلاش مجدد
            </Button>
            <Button onClick={handleCancel} variant="outline">
              بازگشت
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cameraContainer}>
      {/* Video Preview or Captured Image */}
      <div className={styles.previewArea}>
        {capturedImage ? (
          <img src={capturedImage} alt="Captured" className={styles.capturedImage} />
        ) : (
          <>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className={styles.video}
            />
            {isLoading && (
              <div className={styles.loadingOverlay}>
                <LoadingSpinner size="large" color="white" />
                <p className={styles.loadingText}>در حال بارگذاری دوربین...</p>
              </div>
            )}
          </>
        )}

        {/* Camera Overlay Guide */}
        {!capturedImage && !isLoading && (
          <div className={styles.cameraOverlay}>
            <div className={styles.guideBorder}></div>
            <p className={styles.guideText}>سند را در کادر قرار دهید</p>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        {capturedImage ? (
          // Captured Image Controls
          <div className={styles.captureControls}>
            <Button
              onClick={handleRetake}
              variant="outline"
              icon={<IoSync />}
            >
              گرفتن دوباره
            </Button>
            <Button
              onClick={handleConfirm}
              variant="success"
              icon={<IoCheckmark />}
              size="large"
            >
              تایید تصویر
            </Button>
          </div>
        ) : (
          // Camera Controls
          <div className={styles.cameraControls}>
            <button
              className={styles.iconButton}
              onClick={handleCancel}
              title="انصراف"
            >
              <IoClose size={28} />
            </button>

            <button
              className={styles.captureButton}
              onClick={handleCapture}
              disabled={!isStreaming || isLoading}
              title="گرفتن تصویر"
            >
              <div className={styles.captureInner}></div>
            </button>

            <button
              className={styles.iconButton}
              onClick={switchCamera}
              disabled={!isStreaming || isLoading}
              title="تغییر دوربین"
            >
              <IoSync size={28} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CameraCapture;
