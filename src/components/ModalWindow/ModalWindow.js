import styles from "./ModalWindow.module.css";
import React, { useState } from "react";
import Button from "../Button/Button";
import Image from "next/image";

import pic from "../../../public/image/illustration_128_blockchain.png"
import Modal from 'react-modal';
import {motion} from "framer-motion"; 


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


    const handleModalOpenClick = () =>{
        setIsOpen(true);

    }
  };


    const handleModalCloseClick = () =>{
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


    return ( 
        <>
            <Button size="small" onClick={handleModalOpenClick}>Open ModalWindow</Button>
            <Modal closeTimeoutMS={250} isOpen={isOpen} onRequestClose={handleModalCloseClick} className={styles.modalBackground}>
                <motion.div 
                    initial={{opacity: 0}} 
                    animate={{opacity: 1, transition:{ duration: 0.3 }}}  
                    exit={{opacity: 0, transition: {delay: 0.3}}} 
                    id="modal" 
                    className={styles.modalWindow}
                >
                    <header className={styles.modalHeader}>
                        <p className={styles.modalTitle}>{title}</p>
                        <button onClick={handleModalCloseClick}>&#10006;</button>
                    </header>


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


                    <footer className={styles.modelFooter}>
                        {numberOfButtons === 2 && <Button intent={secondButtonColor} type={secondButtonType}>{secondButtonText}</Button>}
                        <Button type={firstButtonType} intent={firstButtonColor}>{firstButtonText}</Button>
                    </footer>
                </motion.div>
            </Modal>
        </>
    );
}
 
export default ModalWindow;

