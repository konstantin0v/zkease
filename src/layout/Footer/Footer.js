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
  const currentPage = router.pathname;

  return (
    <>
      {index &&(
        <footer {...props}>
          <div className={styles.top}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/image/1.svg"
                alt="zkEasy logo"
                fill
                quality={100}
                className={styles.logo__img}
              />
            </Link>
            <ul className={styles.top__menu}>
              <li>
                <Link
                  href="https://forms.gle/7ySdaZT7iMNFxQ9o8"
                  target="_blank"
                >
                  Submit project
                </Link>
              </li>
              <li>
                <Link href="mailto:contact@zkease.xyz">Contact us</Link>
              </li>
              <li>
                <Link
                  href="https://forms.gle/Yahhjja5ev61hfC37"
                  target="_blank"
                >
                  Contact support
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.down}>
            <ul className={styles.down__left}>
              <li>
                <Link target="_blank" href="/pdf/ToS_ZkEase.pdf">
                  Terms of use
                </Link>
              </li>
              <li>
                <Link target="_blank" href="/pdf/Privacy_Policy_ZkEase.pdf">
                  Privacy Policy
                </Link>
              </li>
            </ul>
            <ul className={styles.down__right}>
              <li className={styles.soon}>
                <DiscordSvg />
              </li>
              <li className={styles.soon}>
                <TelegramSvg />
              </li>
              <li>
                <Link target="_blank" href="https://twitter.com/zkeasexyz">
                  <TwitterSvg className={styles.svg} />
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      )}
      {currentPage.includes('landing') && <div className={styles.forLanding}>
        <footer {...props}>
          <div className={styles.top}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/image/1.svg"
                alt="zkEasy logo"
                fill
                quality={100}
                className={styles.logo__img}
              />
            </Link>
            <ul className={styles.top__menu}>
              <li>
                <Link
                  href="https://forms.gle/7ySdaZT7iMNFxQ9o8"
                  target="_blank"
                >
                  Submit project
                </Link>
              </li>
              <li>
                <Link href="mailto:contact@zkease.xyz">Contact us</Link>
              </li>
              <li>
                <Link
                  href="https://forms.gle/Yahhjja5ev61hfC37"
                  target="_blank"
                >
                  Contact support
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.down}>
            <ul className={styles.down__left}>
              <li>
                <Link target="_blank" href="/pdf/ToS_ZkEase.pdf">
                  Terms of use
                </Link>
              </li>
              <li>
                <Link target="_blank" href="/pdf/Privacy_Policy_ZkEase.pdf">
                  Privacy Policy
                </Link>
              </li>
            </ul>
            <ul className={styles.down__right}>
              <li className={styles.soon}>
                <DiscordSvg />
              </li>
              <li className={styles.soon}>
                <TelegramSvg />
              </li>
              <li>
                <Link target="_blank" href="https://twitter.com/zkeasexyz">
                  <TwitterSvg className={styles.svg} />
                </Link>
              </li>
            </ul>
          </div>
        </footer></div>}
    </>
  );
};
export default Footer;
