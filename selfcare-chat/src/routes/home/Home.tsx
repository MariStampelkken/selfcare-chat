import React from 'react';
import styles from './home.module.css';
import LinkButton from '../../components/linkButton/LinkButton';

function Home() {
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