import styles from "./chat.module.css";

function Chat() {
  return (
    <div className={styles.container}>
      <div className={styles.chatInput}>
        <input type="text" placeholder="Ask anything..." />
      </div>
    </div>
  );
}

export default Chat;
