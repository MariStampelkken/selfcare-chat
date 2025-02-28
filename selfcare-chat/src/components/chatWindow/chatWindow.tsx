import React from "react";
import styles from "./chatWindow.module.css";
import ExitButton from "../exitButton/exitButton";
import MessageBox from "../messageBox/messageBox";

const ChatWindow: React.FC = () => {
    return (
        <div className={styles.chatContainer}>
            <div className={styles.chatWindow}>
                <header className={styles.chatHeader}>
                    <h2 className={styles.title}>Chatbot</h2>
                    <ExitButton />
                </header>
                <div className={styles.chatBody}>
                    <div className={styles.chatBotContent}>
                    <MessageBox message={"Welcome to the selfcare chatbot, what can I help you with today?"} />
                    <MessageBox message={"..."} />
                    <MessageBox message={"..."} />
                    <MessageBox message={"..."} />
                    </div>
                    <div className={styles.chatUserContent}>
                    <MessageBox message={"..."} />
                    </div>
                </div>
                <div className={styles.chatFooter}>
                </div>
            </div>
        </div>
    );
};

export default ChatWindow;