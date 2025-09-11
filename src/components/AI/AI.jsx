import React from "react";
import styles from "./ai.module.css";
import NeuralBackground from '../NeuralBackground/background'

function AI() {
  const chatUrl =
    import.meta.env.VITE_N8N_CHAT_URL ||
    "https://temozhghenti.app.n8n.cloud/webhook/75e67655-f627-4e85-ae06-6873b4334327/chat";

  const [open, setOpen] = React.useState(false);

  return (
    <div className={styles.floatingContainer}>
      <div className={`${styles.menu} ${open ? styles.menuOpen : ""}`}>
        <iframe
          src={chatUrl}
          title="SkillMap Chat"
          style={{ border: 0, width: "100%", height: "100%" }}
          loading="lazy"
          allow="clipboard-write; microphone; camera"
        />
        <NeuralBackground/>
        {/* <ChatBot chatUrl={chatUrl} /> */}
      </div>
      <div className={styles.container} onClick={() => setOpen(!open)}>
        AI
      </div>
    </div>
  );
}

export default AI;
