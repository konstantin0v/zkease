import Link from "next/link";
import styles from "./journeyCard.module.css";

export default function CustomLink({ href, disabled, children }) {
  if (disabled) {
    return (
      <div disabled className={styles.card}>
        {children}
      </div>
    );
  } else {
    return (
      <Link className={styles.card} href={href}>
        {children}
      </Link>
    );
  }
}
