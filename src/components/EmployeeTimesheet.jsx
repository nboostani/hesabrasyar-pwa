import React from 'react';
import Header from './common/Header';
import Card from './common/Card';
import { MOCK_TIMESHEETS } from '../utils/constants';
import styles from './PlaceholderScreen.module.css';

const EmployeeTimesheet = () => {
  return (
    <div className={styles.container}>
      <Header title="تایم‌شیت کارکنان" showBack />
      
      <div className={styles.content}>
        <div className={styles.devNotice}>
          <span className={styles.devIcon}>🚧</span>
          <p className={styles.devText}>این بخش در حال توسعه است</p>
        </div>

        <div className={styles.listSection}>
          <h2 className={styles.sectionTitle}>ساعات کاری ثبت شده</h2>
          <div className={styles.list}>
            {MOCK_TIMESHEETS.map((timesheet) => (
              <Card key={timesheet.id} hoverable className={styles.listItem}>
                <div className={styles.timesheetContent}>
                  <div className={styles.timesheetHeader}>
                    <h3 className={styles.itemTitle}>{timesheet.employee}</h3>
                    <span className={styles.hoursBadge}>{timesheet.hours} ساعت</span>
                  </div>
                  <p className={styles.itemSubtitle}>{timesheet.project}</p>
                  <p className={styles.timesheetDate}>{timesheet.date}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTimesheet;
