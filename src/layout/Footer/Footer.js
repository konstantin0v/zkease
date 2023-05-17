import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  DiscordSvg,
  GithubSvg,
  SocialSvg,
  TelegramSvg,
  TwitterSvg,
} from '@/components';

const Footer = ({ ...props }) => {
  const router = useRouter();
  const index = router.pathname === '/';

  return (
    <>
      {index && (
        <footer {...props}>
          <div className={styles.top}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/image/1.svg"
                alt="zkEasy logo"
                width={119}
                height={19}
                className={styles.logo__img}
              />
            </Link>
            <ul className={styles.top__menu}>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Submit project</Link>
              </li>
              <li>
                <Link href="/">Contact us</Link>
              </li>
              <li>
                <Link href="/">Contact support</Link>
              </li>
            </ul>
          </div>
          <div className={styles.down}>
            <ul className={styles.down__left}>
              <li>
                <Link href="/">Terms of use</Link>
              </li>
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
            </ul>
            <ul className={styles.down__right}>
              <li>
                <Link href="/">
                  <GithubSvg />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <DiscordSvg />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <TelegramSvg />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <TwitterSvg />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <SocialSvg />
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      )}
    </>
  );
};
export default Footer;
