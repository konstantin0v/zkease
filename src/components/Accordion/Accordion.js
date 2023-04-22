import React, { useState } from "react";
import styles from "./Accordion.module.css";

const Accordion = ({
    accordionData,
}) => {
    const [isActive, setIsActive] = useState(false);

    const data = {
        title: 'Section 1',
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`
      };
    
    const { title, content } = data;

    return ( 
    <>
        <div className={styles.accordion}>
            <div className={styles.accordionItem}>
            <div className={isActive ? styles.accordionTitleActive : styles.accordionTitle } onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className={styles.accordionContent}>{content}</div>}
            </div>
        </div>
    </> 
    );
}
 
export default Accordion; 
