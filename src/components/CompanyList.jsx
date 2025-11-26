import React from 'react';
import Header from './common/Header';
import Card from './common/Card';
import { MOCK_COMPANIES } from '../utils/constants';
import styles from './PlaceholderScreen.module.css';

const CompanyList = () => {
  return (
    <div className={styles.container}>
      <Header title="لیست شرکت‌ها" showBack />
      
      <div className={styles.content}>
        <div className={styles.devNotice}>
          <span className={styles.devIcon}>🚧</span>
          <p className={styles.devText}>این بخش در حال توسعه است</p>
        </div>

        <div className={styles.listSection}>
          <h2 className={styles.sectionTitle}>شرکت‌های موجود</h2>
          <div className={styles.list}>
            {MOCK_COMPANIES.map((company) => (
              <Card key={company.id} hoverable className={styles.listItem}>
                <div className={styles.itemContent}>
                  <div>
                    <h3 className={styles.itemTitle}>{company.name}</h3>
                    <p className={styles.itemSubtitle}>{company.type}</p>
                  </div>
                  <span className={styles.badge}>{company.type}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyList;
