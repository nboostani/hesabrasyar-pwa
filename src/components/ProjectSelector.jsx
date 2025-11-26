import React from 'react';
import { MOCK_PROJECTS } from '../utils/constants';
import Card from './common/Card';
import styles from './ProjectSelector.module.css';

const ProjectSelector = ({ selectedProject, onSelectProject, capturedImage }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Captured Image Thumbnail */}
        {capturedImage && (
          <div className={styles.imagePreview}>
            <img src={capturedImage} alt="Captured document" className={styles.thumbnail} />
            <p className={styles.imageLabel}>تصویر ضبط شده</p>
          </div>
        )}

        {/* Project Selection */}
        <div className={styles.selectionSection}>
          <h2 className={styles.title}>انتخاب پروژه</h2>
          <p className={styles.description}>
            لطفاً پروژه مورد نظر برای بارگذاری سند را انتخاب کنید
          </p>

          <div className={styles.projectList}>
            {MOCK_PROJECTS.map((project) => (
              <Card
                key={project.id}
                hoverable
                onClick={() => onSelectProject(project)}
                className={`${styles.projectCard} ${
                  selectedProject?.id === project.id ? styles.selected : ''
                }`}
              >
                <div className={styles.projectInfo}>
                  <div className={styles.projectHeader}>
                    <h3 className={styles.projectName}>{project.name}</h3>
                    <span className={styles.projectCode}>{project.code}</span>
                  </div>
                  {selectedProject?.id === project.id && (
                    <div className={styles.selectedBadge}>✓</div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSelector;
