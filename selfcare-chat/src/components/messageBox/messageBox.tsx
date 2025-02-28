import React from "react";
import styles from "./messageBox.module.css";

interface MessageBoxProps {
    message: string;
}

const MessageBox: React.FC<MessageBoxProps> = ({ message }) => {
    return (
        <div className={styles.messageBox}>
            <p>{message}</p>
        </div>
    );
};

export default MessageBox;