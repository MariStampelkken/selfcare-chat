import React from "react";
import styles from "./chatWindow.module.css";
import ExitButton from "../exitButton/exitButton";

const ChatWindow: React.FC = () => {
    return (
        <div className={styles.chatContainer}>
            <div className={styles.chatWindow}>
                <header className={styles.chatHeader}>
                    <h2 className={styles.title}>Chat</h2>
                    <ExitButton />
                </header>
                <div className={styles.chatBody}>
                    <p>Welcome to the chat!</p>
                </div>
                <div className={styles.chatFooter}>
                </div>
            </div>
        </div>
    );
};

export default ChatWindow;