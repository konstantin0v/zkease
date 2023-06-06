import styles from "./Hero.module.css";
import logo from "../../../public/image/logoZkSync.png"
import Image from "next/image";
import LandingButton from "../LandingButton/LandingButton";
import starts from "../../../public/image/illustration_64_stars.png"
import snippet from "../../../public/image/1.png"

const Hero = () => {
    return ( 
    <div className={styles.heroContainer}>
        <header className={styles.header}>
            <Image src={logo}/>
            <LandingButton>Launch App</LandingButton>
        </header>

        <div className={styles.mainContainer}>
            <div className={styles.stars}>
                <Image src={starts}/>
            </div>
            <div className={styles.text}>
                <h1 className={styles.headerText}>The <span className={styles.purpleText}>easiest</span> way to use dApps on ZkSync</h1>
                <p className={styles.paragraphText}>Discover and learn about zkSync projects with ease, all in one place.</p>
            </div>
            <div className={styles.buttons}>
                <div className={styles.rightButton}><LandingButton size="large" >Launch App</LandingButton></div>
                <div><LandingButton size="large" type="empty">Contact Us</LandingButton></div>
                
                
            </div>
        </div>

        <div className={styles.container}>
            <div className={styles.snippetContainer}></div>
            <Image className={styles.snippet} src={snippet}/> 
        </div>
    </div> );
}
 
export default Hero;