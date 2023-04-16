import styles from "./LandingButton.module.css"
import clsx from "clsx";

const LandingButton = ({
        children, 
        type,
        size,
        ...props
    }) => {

    return( 
        <button className={clsx(
            type === "empty" && styles.buttonEmpty, 
            styles.button,
            size === "large" && styles.buttonLarge
        )}>{children}</button>
    );
}
 
export default LandingButton;