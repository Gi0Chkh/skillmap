import React from 'react'
import styles from './ai.module.css'

function AI() {
    const [open, setOpen] = React.useState(false);

    return (
        <div className={styles.floatingContainer}>
            <div className={`${styles.menu} ${open ? styles.menuOpen : ''}`}></div>
            <div className={styles.container} onClick={() => setOpen(!open)}>
                AI
            </div>
        </div>
    )
}

export default AI