import React from 'react';
import Header from './common/Header';
import Card from './common/Card';
import { MOCK_PROJECTS } from '../utils/constants';
import styles from './PlaceholderScreen.module.css';

const ProjectList = () => {
  return (
    <div className={styles.container}>
      <Header title="لیست پروژه‌ها" showBack />
      
      <div className={styles.content}>
        <div className={styles.devNotice}>
          <span className={styles.devIcon}>🚧</span>
          <p className={styles.devText}>این بخش در حال توسعه است</p>
        </div>

        <div className={styles.listSection}>
          <h2 className={styles.sectionTitle}>پروژه‌های فعال</h2>
          <div className={styles.list}>
            {MOCK_PROJECTS.map((project) => (
              <Card key={project.id} hoverable className={styles.listItem}>
                <div className={styles.itemContent}>
                  <div>
                    <h3 className={styles.itemTitle}>{project.name}</h3>
                    <p className={styles.itemSubtitle}>کد پروژه: {project.code}</p>
                  </div>
                  <span className={styles.statusBadge}>فعال</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
