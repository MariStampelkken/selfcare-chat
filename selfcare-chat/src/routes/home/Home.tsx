import React from 'react';
import styles from './home.module.css';
import LinkButton from '../../components/linkButton/LinkButton';

const Home: React.FC = () => {
    return (
      <div className={styles.home}>
        <h1 className={styles.title}> </h1>
        <div className={styles.linkButton}>
          <LinkButton />
        </div>
      </div>
    );
  }
  
  export default Home;