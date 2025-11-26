import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoSend, IoCheckmarkCircle } from 'react-icons/io5';
import Header from './common/Header';
import Button from './common/Button';
import LoadingSpinner from './common/LoadingSpinner';
import CameraCapture from './CameraCapture';
import ProjectSelector from './ProjectSelector';
import { simulateApiCall } from '../utils/helpers';
import styles from './DocumentUpload.module.css';

const DocumentUpload = ({ onSuccess }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState('camera'); // 'camera', 'select', 'sending', 'success'
  const [capturedImage, setCapturedImage] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCapture = (imageData) => {
    setCapturedImage(imageData);
    setStep('select');
  };

  const handleCameraCancel = () => {
    navigate('/');
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  const handleSendDocument = async () => {
    if (!selectedProject || !capturedImage) return;

    setIsLoading(true);
    setStep('sending');

    // Prepare document data
    const documentData = {
      image: capturedImage,
      project: selectedProject,
      timestamp: new Date().toISOString(),
      size: capturedImage.length
    };

    // Log data to console (for demo purposes)
    console.log('📤 ارسال سند:', {
      project: selectedProject.name,
      projectCode: selectedProject.code,
      imageSize: `${Math.round(capturedImage.length / 1024)} KB`,
      timestamp: documentData.timestamp
    });

    try {
      // Simulate API call
      await simulateApiCall(documentData, 2500);
      
      setIsLoading(false);
      setStep('success');

      // Auto redirect after success
      setTimeout(() => {
        if (onSuccess) {
          onSuccess();
        }
        navigate('/');
      }, 2500);
    } catch (error) {
      console.error('Error sending document:', error);
      setIsLoading(false);
      // Handle error (could add error state)
    }
  };

  const handleSendAnother = () => {
    setCapturedImage(null);
    setSelectedProject(null);
    setStep('camera');
  };

  // Camera Step
  if (step === 'camera') {
    return (
      <CameraCapture
        onCapture={handleCapture}
        onCancel={handleCameraCancel}
      />
    );
  }

  // Success Step
  if (step === 'success') {
    return (
      <div className={styles.successContainer}>
        <div className={styles.successContent}>
          <IoCheckmarkCircle size={80} className={styles.successIcon} />
          <h2 className={styles.successTitle}>سند با موفقیت ارسال شد</h2>
          <p className={styles.successMessage}>
            سند شما به پروژه <strong>{selectedProject?.name}</strong> اضافه شد
          </p>
          <div className={styles.successActions}>
            <Button onClick={handleSendAnother} variant="primary">
              ارسال سند دیگر
            </Button>
            <Button onClick={() => navigate('/')} variant="outline">
              بازگشت به منوی اصلی
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Sending Step
  if (step === 'sending') {
    return (
      <div className={styles.sendingContainer}>
        <div className={styles.sendingContent}>
          <LoadingSpinner size="large" />
          <h2 className={styles.sendingTitle}>در حال ارسال سند...</h2>
          <p className={styles.sendingMessage}>لطفاً صبر کنید</p>
        </div>
      </div>
    );
  }

  // Select Project Step
  return (
    <div className={styles.documentUpload}>
      <Header title="بارگذاری سند" showBack />
      
      <ProjectSelector
        capturedImage={capturedImage}
        selectedProject={selectedProject}
        onSelectProject={handleSelectProject}
      />

      {/* Fixed Send Button */}
      <div className={styles.sendButtonContainer}>
        <Button
          onClick={handleSendDocument}
          disabled={!selectedProject || isLoading}
          variant="primary"
          size="large"
          fullWidth
          icon={<IoSend />}
        >
          ارسال سند
        </Button>
      </div>
    </div>
  );
};

export default DocumentUpload;
