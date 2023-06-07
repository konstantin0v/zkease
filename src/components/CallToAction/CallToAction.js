import LandingButton from "../LandingButton/LandingButton";
import styles from "./CallToAction.module.css";


const CallToAction = () => {
    return ( 
        <div className={styles.mainContainer}>
            <div className={styles.textContainner}>
                <h1 className={styles.headContainer}>Ready to learn zkSync ecosystem?</h1>
                <p className={styles.paragraph}>We make your transition smooth with a logical and structured approach to verified ecosystem dApps.</p>
            </div>

            <LandingButton size="large">Launch App</LandingButton>
        </div> 
    );
}
 
export default CallToAction;