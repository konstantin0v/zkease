import styles from "./Features.module.css";
import rightSnipped from "../../../public/image/2_Cropped.png";
import leftSnipped from "../../../public/image/3_Cropped.png";
import Image from "next/image";

const Features = () => {
    return ( 
    <div className={styles.mainContainer}>
        <div className={styles.container}>
            <h1 className={styles.firstHeaderText}>Education</h1>
            <h2 className={styles.secondHeaderText}>Learn and Experiment with zkSync Projects Seamlessly.</h2>
            <p className={styles.paragraphText}>
                Our platform provides a comprehensive learning experience, allowing <br/> users to explore zkSync projects through step-by-step guides and <br/> embedded product demonstrations
            </p>
        </div>

        <div className={styles.snippets}>

            <div className={styles.snippedContainer}>
                <div className={styles.snippedTextContainer}>
                    <h1 className={styles.snippedPurpleText}>Guides</h1>
                    <h2 className={styles.snippedStrongText}>Tutorials for zkSync Projects</h2>
                    <p className={styles.snippedText}>
                        Our tutorials offer detailed, structured walkthroughs to <br/>help users understand and navigate zkSync projects with <br/> ease.
                    </p>
                </div>

                <div className={styles.snippedImage}>
                    <Image src={rightSnipped} width={500} height={390}/>
                </div>
            </div>

            <div className={styles.snippedContainer}>
                <div className={styles.snippedTextContainer}>
                    <h1 className={styles.snippedPurpleText}>Embedded</h1>
                    <h2 className={styles.snippedStrongText}>Explore inside our app</h2>
                    <p className={styles.snippedText}>
                        We aim to help onboard people into the ZkSync <br/> ecosystem. You can engage with verified* ecosystem <br/> dApps in a logical and structured manner. 
                    </p>
                </div>

                <div className={styles.snippedImage}>
                    <Image src={leftSnipped} width={500} height={390}/>
                </div>
            </div>
        </div>
    </div> 
    );
}
 
export default Features;