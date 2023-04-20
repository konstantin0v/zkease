import styles from "./ModalWindow.module.css";
import React from "react";
import Button from "../Button/Button";
import Image from "next/image";
import pic from "../../../public/image/illustration_128_blockchain.png"

const ModalWindow = ({
    title = "Title",
    message = "Message",
    image = pic,
    imageAltText,
    imageWidth,
    imageFlag = true,
}) => {
    return ( 
        <>
            <div className={styles.ModalWindow}>
                <header className={styles.modalHeader}>
                    <p className={styles.modalTitle}>{title}</p>
                    <p>&#10006;</p>
                </header>

                <main className={styles.modalBody}>
                    <Image alt={imageAltText} src={image} width={128} height={128}/>
                    <p className={styles.modalMassage}>{message}</p>
                </main>

                <footer className={styles.modelFooter}>
                    <Button type="secondary">БАРЯ</Button>
                    <Button intent="intent-primary">УМЕР</Button>
                </footer>
            </div>
        </>
    );
}
 
export default ModalWindow;