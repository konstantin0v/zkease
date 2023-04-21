import styles from "./ModalWindow.module.css";
import React, { useState } from "react";
import Button from "../Button/Button";
import Image from "next/image";
import pic from "../../../public/image/illustration_128_blockchain.png"
import Modal from 'react-modal';

const ModalWindow = ({
    title = "Title",
    message = "Message",
    image = pic,
    imageAltText,
    imageWidth = 128,
    imageHeight = 128,
    imageFlag = false,
    numberOfButtons = 1,
    secondButtonType = "secondary",
    secondButtonColor,
    secondButtonText = "Second Button",
    firstButtonType,
    firstButtonColor = "intent-primary",
    firstButtonText = "First Button",

}) => {
    const [isOpen, setIsOpen] = useState(false);

    return ( 
        <>
            <Button size="small" onClick={() => setIsOpen(true)}>Open ModalWindow</Button>
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} className={styles.modalBackground}>
                <div className={styles.ModalWindow}>
                    <header className={styles.modalHeader}>
                        <p className={styles.modalTitle}>{title}</p>
                        <button onClick={() => setIsOpen(false)}>&#10006;</button>
                    </header>

                    <main className={styles.modalBody}>
                        {imageFlag && <Image alt={imageAltText} src={image} width={imageWidth} height={imageHeight}/>}
                        <p className={styles.modalMassage}>{message}</p>
                    </main>

                    <footer className={styles.modelFooter}>
                        {numberOfButtons === 2 && <Button intent={secondButtonColor} type={secondButtonType}>{secondButtonText}</Button>}
                        <Button type={firstButtonType} intent={firstButtonColor}>{firstButtonText}</Button>
                    </footer>
                </div>
            </Modal>
        </>
    );
}
 
export default ModalWindow;