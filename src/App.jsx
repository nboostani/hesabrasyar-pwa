import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useToast } from './hooks/useToast';
import ToastContainer from './components/common/Toast';
import SplashScreen from './components/SplashScreen';
import MainMenu from './components/MainMenu';
import DocumentUpload from './components/DocumentUpload';
import CompanyList from './components/CompanyList';
import ProjectList from './components/ProjectList';
import EmployeeTimesheet from './components/EmployeeTimesheet';
import './styles/variables.css';
import './styles/global.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const { toasts, removeToast, success } = useToast();

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const handleDocumentSuccess = () => {
    success('سند با موفقیت ارسال شد', 3000);
  };

  // Show splash screen
  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route 
            path="/upload-document" 
            element={<DocumentUpload onSuccess={handleDocumentSuccess} />} 
          />
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/timesheets" element={<EmployeeTimesheet />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        {/* Toast Notifications */}
        <ToastContainer toasts={toasts} onClose={removeToast} />
      </div>
    </Router>
  );
}

export default App;
