import React, { useState } from "react";
import styles from "./Accordion.module.css";
import {motion} from "framer-motion";
import Image from "next/image";
import { CloserSvg } from "..";
import { OpenerSvg } from "..";
import { TestSvg } from "..";


const Accordion = ({
    accordionData = {
        title: 'Section 1',
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`
      },
}) => {
    const [isActive, setIsActive] = useState(false);
    
    const { title, content } = accordionData;


  const { title, content } = data;

  return (
    <>

        <div className={styles.accordion}>
            <div className={styles.accordionItem}>
            <div className={isActive ? styles.accordionTitleActive : styles.accordionTitle } onClick={() => setIsActive(!isActive)}>
                <div className={styles.title}>
                    <TestSvg />
                    <div className={styles.titleText}>{title}</div> 
                </div>

                <div>{isActive ? <CloserSvg /> : <OpenerSvg />}</div>
            </div>
            {isActive && <motion.div 
                initial={{opacity: 0}} 
                animate={{opacity: 1, transition:{ duration: 0.7 }}} 
                exit={{opacity: 0, delay: 0.3}} 
                className={styles.accordionContent}
                >{content}</motion.div>}
            </div>

        </div>
      </div>
    </>
  );
};

export default Accordion;
