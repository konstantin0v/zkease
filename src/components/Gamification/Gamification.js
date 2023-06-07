import gamification from "../../../public/image/6_cropped.png";
import security from "../../../public/image/4.png";
import convinience from "../../../public/image/5_cropped.png";
import styles from "./Gamification.module.css";
import Image from "next/image";

const Gamification = () => {
    return ( 
        <div className={styles.mainContainer}>

            <div className={styles.gamification}>
                <div className={styles.text}>
                    <h1 className={styles.headText}>Gamification</h1>
                    <p className={styles.paragraph}>We make your transition smooth with a logical and structured</p>
                    <p className={styles.paragraph}>approach to verified ecosystem dApps.</p>
                </div>
                <Image src={gamification} height={360} width={1140}/>
            </div>

            <div className={styles.cardsContainer}>
                <div className={styles.security}>
                    <div className={styles.text}>
                        <h1 className={styles.headText}>Security</h1>
                        <p className={styles.paragraph}>We make your transition smooth with a logical and </p>
                        <p className={styles.paragraph}>structured approach to verified ecosystem dApps.</p>
                    </div>
                    <Image src={security} height={320} width={479}/>
                </div>

                <div className={styles.convinience}>
                    <div className={styles.text}>
                        <h1 className={styles.headText}>Convinience</h1>
                        <p className={styles.paragraph}>We make your transition smooth with a logical and</p>
                        <p className={styles.paragraph}>structured approach to verified ecosystem dApps.</p>
                    </div>
                    <Image src={convinience} height={360} width={544}/>
                </div>
            </div>
        </div> 
    );
}
 
export default Gamification;