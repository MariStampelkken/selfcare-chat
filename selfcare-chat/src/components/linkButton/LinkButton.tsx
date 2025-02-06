import React from "react";
import { Link } from "react-router-dom";
import styles from "./linkButton.module.css";


const LinkButton: React.FC = () => {
  return (
	<Link to="/Chat" className={styles.linkButton}>
	  Click here to chat
	</Link>
  );
}

export default LinkButton;