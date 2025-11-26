import { useState, useRef, useCallback, useEffect } from 'react';

/**
 * Custom hook for camera functionality
 * Provides real camera access via MediaDevices API
 */
export const useCamera = () => {
  const [stream, setStream] = useState(null);
  const [error, setError] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [facingMode, setFacingMode] = useState('environment'); // 'user' or 'environment'
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  /**
   * Start camera with specified facing mode
   */
  const startCamera = useCallback(async (mode = 'environment') => {
    try {
      setError(null);
      
      // Stop existing stream if any
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }

      const constraints = {
        video: {
          facingMode: { ideal: mode },
          width: { ideal: 1920 },
          height: { ideal: 1080 }
        }
      };

      const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
      setStream(mediaStream);
      setFacingMode(mode);
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        // Wait for video to be ready and play it
        try {
          await videoRef.current.play();
        } catch (playError) {
          console.log('Video play error (may be auto-play policy):', playError);
          // Video will auto-play with autoPlay attribute
        }
      }
    } catch (err) {
      console.error('Camera error:', err);
      
      // Set Persian error messages
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        setError('دسترسی به دوربین رد شد. لطفاً دسترسی را در تنظیمات مرورگر فعال کنید.');
      } else if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
        setError('دوربین در دسترس نیست.');
      } else if (err.name === 'NotReadableError' || err.name === 'TrackStartError') {
        setError('دوربین توسط برنامه دیگری استفاده می‌شود.');
      } else {
        setError('خطا در دسترسی به دوربین. لطفاً دوباره تلاش کنید.');
      }
    }
  }, [stream]);

  /**
   * Capture image from video stream
   */
  const captureImage = useCallback(() => {
    if (!videoRef.current) {
      setError('دوربین آماده نیست');
      return;
    }

    try {
      const canvas = canvasRef.current || document.createElement('canvas');
      canvasRef.current = canvas;
      
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      
      const ctx = canvas.getContext('2d');
      ctx.drawImage(videoRef.current, 0, 0);
      
      const imageData = canvas.toDataURL('image/jpeg', 0.9);
      setCapturedImage(imageData);
      
      // Stop camera after capture
      stopCamera();
    } catch (err) {
      console.error('Capture error:', err);
      setError('خطا در گرفتن تصویر');
    }
  }, []);

  /**
   * Stop camera stream
   */
  const stopCamera = useCallback(() => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  }, [stream]);

  /**
   * Switch between front and back camera
   */
  const switchCamera = useCallback(() => {
    const newMode = facingMode === 'environment' ? 'user' : 'environment';
    startCamera(newMode);
  }, [facingMode, startCamera]);

  /**
   * Reset captured image
   */
  const resetCapture = useCallback(() => {
    setCapturedImage(null);
    setError(null);
  }, []);

  /**
   * Check if camera is available
   */
  const isCameraAvailable = useCallback(async () => {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      return devices.some(device => device.kind === 'videoinput');
    } catch (err) {
      return false;
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, [stopCamera]);

  return {
    videoRef,
    stream,
    error,
    capturedImage,
    facingMode,
    startCamera,
    captureImage,
    stopCamera,
    switchCamera,
    resetCapture,
    setCapturedImage,
    isCameraAvailable,
    isStreaming: !!stream
  };
};
