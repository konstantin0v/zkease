import { Task } from "@/components";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home({ ...props }) {
  return (
    <>
      <div className={styles.banner}>banner</div>
      <Link href="/task/task" className={styles.ink}>
        click me
      </Link>
      <Task />
    </>
  );
}
