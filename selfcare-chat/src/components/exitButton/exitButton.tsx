import { NavLink } from 'react-router-dom';
import styles from './exitButton.module.css';
import React from 'react';

const ExitButton: React.FC = () => {
  return (
    <NavLink to="/" className={styles.exitButton}>
        X
    </NavLink>
  );
}
export default ExitButton;