import styles from "./ModalWindow.module.css";
import React, { useState } from "react";
import Button from "../Button/Button";
import Image from "next/image";
import pic from "../../../public/image/illustration_128_blockchain.png";
import Modal from "react-modal";

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

  const handleModalOpenClick = () => {
    if (typeof document !== "undefined") {
      const modal = document.querySelector("#modal");
      modal.styles.opacity = "1";
      setIsOpen(true);
    }
  };

  const handleModalCloseClick = () => {
    if (typeof document !== "undefined") {
      const modal = document.querySelector("#modal");
      modal.styles.opacity = "0";
      setIsOpen(false);
    }
  };

  return (
    <>
      <Button size="small" onClick={handleModalOpenClick}>
        Open ModalWindow
      </Button>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleModalCloseClick}
        className={styles.modalBackground}
      >
        <main id="modal" className={styles.modalWindow}>
          <header className={styles.modalHeader}>
            <p className={styles.modalTitle}>{title}</p>
            <button onClick={handleModalCloseClick}>&#10006;</button>
          </header>

          <main className={styles.modalBody}>
            {imageFlag && (
              <Image
                alt={imageAltText}
                src={image}
                width={imageWidth}
                height={imageHeight}
              />
            )}
            <p className={styles.modalMassage}>{message}</p>
          </main>

          <footer className={styles.modelFooter}>
            {numberOfButtons === 2 && (
              <Button intent={secondButtonColor} type={secondButtonType}>
                {secondButtonText}
              </Button>
            )}
            <Button type={firstButtonType} intent={firstButtonColor}>
              {firstButtonText}
            </Button>
          </footer>
        </main>
      </Modal>
    </>
  );
};

export default ModalWindow;
