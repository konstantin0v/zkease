import LandingButton from "@/components/LandingButton/LandingButton";
import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features/Features";
import styles from "../styles/Landing.module.css";
import Gamification from "@/components/Gamification/Gamification";
import CallToAction from "@/components/CallToAction/CallToAction";

const Landing = () => {
  return (
    <>
      <Hero />
      <div className={styles.container}>
        <Features />
        <div className={styles.bigTextContainer}>
          <p className={styles.bigText}>
            We aim to help onboard people into the ZkSync ecosystem. You can
            engage with verified ecosystem dApps in a logical and structured
            manner. We clarify what is happening: our guides for each Journey
            task ensure you complete everything correctly.
          </p>
        </div>
      </div>
      <Gamification />
      <CallToAction />
    </>
  );
};

export default Landing;
