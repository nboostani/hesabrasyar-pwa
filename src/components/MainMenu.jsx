import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoCamera, IoBusiness, IoFolder, IoTime } from 'react-icons/io5';
import Card from './common/Card';
import styles from './MainMenu.module.css';

const MainMenu = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      id: 1,
      title: 'بارگذاری اسناد به پروژه‌ها',
      icon: <IoCamera size={48} />,
      route: '/upload-document',
      description: 'اسکن و بارگذاری اسناد'
    },
    {
      id: 2,
      title: 'لیست شرکت‌ها',
      icon: <IoBusiness size={48} />,
      route: '/companies',
      description: 'مشاهده و مدیریت شرکت‌ها'
    },
    {
      id: 3,
      title: 'لیست پروژه‌ها',
      icon: <IoFolder size={48} />,
      route: '/projects',
      description: 'مشاهده پروژه‌های فعال'
    },
    {
      id: 4,
      title: 'تایم‌شیت کارکنان',
      icon: <IoTime size={48} />,
      route: '/timesheets',
      description: 'ثبت ساعات کاری'
    }
  ];

  const handleMenuClick = (route) => {
    navigate(route);
  };

  return (
    <div className={styles.mainMenu}>
      <div className={styles.header}>
        <div className={styles.logoSection}>
          <div className={styles.logoPlaceholder}>
            <svg width="50" height="50" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <rect x="97" y="140" width="25" height="232" fill="#FFFFFF"/>
              <rect x="403" y="140" width="25" height="232" fill="#FFFFFF"/>
              <path d="M212 140 L330 140 L378 188 L330 236 L148 236 L148 188 Z" fill="#FFFFFF"/>
              <path d="M312 276 L378 324 L312 372 L148 372 L148 324 L212 276 Z" fill="#FFFFFF"/>
            </svg>
          </div>
          <div>
            <h1 className={styles.appTitle}>حسابرسیار</h1>
            <p className={styles.appSubtitle}>سامانه مدیریت اسناد</p>
          </div>
        </div>
      </div>

      <div className={styles.menuGrid}>
        {menuItems.map((item) => (
          <Card
            key={item.id}
            hoverable
            onClick={() => handleMenuClick(item.route)}
            className={styles.menuCard}
          >
            <div className={styles.cardContent}>
              <div className={styles.iconWrapper}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          </Card>
        ))}
      </div>

      <footer className={styles.footer}>
        <p>نسخه 1.0.0</p>
      </footer>
    </div>
  );
};

export default MainMenu;
