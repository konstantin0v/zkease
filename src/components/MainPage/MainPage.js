import Link from "next/link";
import styles from "./MainPage.module.css";

export const MainPage = ({ children, ...props }) => {
  return (
    <>
      <div className={styles.banner}>banner</div>
      <Link href="/task" className={styles.ink}>
        click me
      </Link>
    </>
  );
};
