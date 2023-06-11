import styles from "./Hero.module.css";
import logo from "../../../public/image/logoZkSync.png";
import Image from "next/image";
import LandingButton from "../LandingButton/LandingButton";
import starts from "../../../public/image/illustration_64_stars.png";
import snippet from "../../../public/image/1.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <header className={styles.header}>
        <Image src={logo} alt="Logo" />
        <LandingButton>
          <Link href={"/app"}>Launch App</Link>
        </LandingButton>
      </header>

      <div className={styles.mainContainer}>
        <div className={styles.stars}>
          <Image src={starts} alt="Image of tasks" />
        </div>
        <div className={styles.text}>
          <h1 className={styles.headerText}>
            The <span className={styles.purpleText}>easiest</span> way to use
            dApps on ZkSync
          </h1>
          <p className={styles.paragraphText}>
            Discover and learn about zkSync projects with ease, all in one
            place.
          </p>
        </div>
        <div className={styles.buttons}>
          <div className={styles.rightButton}>
            <LandingButton size="large">
              <Link href={"/app"}>Launch App</Link>
            </LandingButton>
          </div>
          <div>
            <LandingButton size="large" type="empty">
              <Link href="mailto:contact@zkease.xyz">Contact us</Link>{" "}
            </LandingButton>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.snippetContainer}></div>
        <Image
          className={styles.snippet}
          src={snippet}
          alt="Snipped of our intarface with tasks"
        />
      </div>
    </div>
  );
};

export default Hero;
