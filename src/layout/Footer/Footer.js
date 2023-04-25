import { Button, TestSvg, ButtonIcon, Badge } from "@/components";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = ({ ...props }) => {
  return (
    <div {...props}>
      <footer className={styles.footer}>
        <div className={styles.btn}>
          <Button
            type="primary"
            size="medium"
            showIconRight
            IconRight={TestSvg}
            showIconLeft
            IconLeft={TestSvg}
          >
            Join
          </Button>
        </div>
        <div>
          <ButtonIcon type="primary" size="small" Icon={TestSvg} />
        </div>
        <div>
          <Badge
            appereance="blue"
            showIconRight
            IconRight={TestSvg}
            showIconLeft
            IconLeft={TestSvg}
          >
            Badge
          </Badge>
        </div>
        <ul className={styles.nav}>
          <li>
            <Link href="/" className={styles.nav__link}>
              Discord
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.nav__link}>
              Twitter
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.nav__link}>
              Contact Us
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
