import React from "react";
import styles from "./ai.module.css";

function AI() {

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
        {/* <ChatBot chatUrl={chatUrl} /> */}
      </div>
      <div className={styles.container} onClick={() => setOpen(!open)}>
        AI
      </div>
    </div>
  );
}

export default AI;
