import { useState } from "react";
import styles from "./Accordion.module.css";
import { motion } from "framer-motion";
import { CloserSvg, GuideSvg, OpenerSvg } from "@/components";
import clsx from "clsx";

const Accordion = ({ content }) => {
  const [isActive, setIsActive] = useState(false);

  // const { title, content } = accordionData;

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
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.7 } }}
          exit={{ opacity: 0, delay: 0.3 }}
          className={styles.accordionContent}
        >
          {content}
        </motion.div>
      )}
    </>
  );
};

export default Accordion;
