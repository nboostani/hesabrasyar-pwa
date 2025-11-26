import React from 'react';
import styles from './Card.module.css';

const Card = ({ 
  children, 
  onClick, 
  className = '',
  hoverable = false,
  padding = 'medium'
}) => {
  const classNames = [
    styles.card,
    styles[padding],
    hoverable ? styles.hoverable : '',
    onClick ? styles.clickable : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
