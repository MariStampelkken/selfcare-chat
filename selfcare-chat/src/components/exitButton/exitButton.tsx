import { NavLink } from 'react-router-dom';
import styles from './exitButton.module.css';
import React from 'react';

const ExitButton: React.FC = () => {
  return (
    <button className={styles.exitButton}>
      <NavLink to="/">X</NavLink>
    </button>
  );
}
export default ExitButton;