import styles from "./ModalWindow.module.css";
import React from "react";
import Button from "../Button/Button";

const ModalWindow = ({
    title = "Title",
    message = "Message",
}) => {
    return ( 
        <>
            <div className={styles.ModalWindow}>
                <header className={styles.modalHeader}>
                    <p className={styles.modalTitle}>{title}</p>
                    <p>&#10006;</p>
                </header>

                <main className={styles.modalBody}>
                    <p className={styles.modalMassage}>{message}</p>
                </main>

                <footer className={styles.modelFooter}>
                    <Button></Button>
                    <Button></Button>
                </footer>
            </div>
        </>
    );
}
 
export default ModalWindow;