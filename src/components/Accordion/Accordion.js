import { useEffect, useState } from "react";
import styles from "./Accordion.module.css";
import { motion } from "framer-motion";
import { CloserSvg, GuideSvg, OpenerSvg } from "@/components";
import clsx from "clsx";

const Accordion = ({ content }) => {
  const [isActive, setIsActive] = useState(false);
  let notFirstRednder = false;

  useEffect(() =>{
    if(isActive === true) notFirstRednder = true;
  }, [isActive])

  return (
    <>
      <div
        className={clsx(styles.title, isActive && styles.title__active)}
        onClick={() => setIsActive(!isActive)}
      >
        <div className={styles.top}>
          <GuideSvg />
          <div className={styles.titleText}>GUIDE</div>
        </div>
        {isActive ? <CloserSvg /> : <OpenerSvg />}
      </div>
        <motion.div
          initial={{ y: -20, opacity:0 }}
          animate={isActive ? { y: 0, opacity:1, transition: { duration: 0.8 }} : { y: -20, opacity:0, transition: { duration: 0.8 }}} 
          className={styles.accordionContent}
        >
          {content}
        </motion.div>
    </>
  );
};

export default Accordion;
