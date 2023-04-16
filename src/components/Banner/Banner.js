import Link from 'next/link';
import styles from './Banner.module.css';
import clsx from 'clsx';
import { ArrowRight, Zksync, Zksynclogo } from '@/components';
import Image from 'next/image';

export const Banner = ({
  linkText,
  bannerTextTitle,
  bannerTextDescription,
  submitBanner = false,
}) => {
  return (
    <div className={clsx(styles.banner, submitBanner && styles.submit)}>
      {!submitBanner && (
        <Link href="https://zksync.io/" className={styles.logo}>
          <Image
            src="/image/zkbanner.svg"
            alt="zkEasy logo"
            fill
            quality={95}
            className={styles.logo__img}
          />
        </Link>
      )}
      <h3 className={styles.title}>{bannerTextTitle}</h3>
      <p className={styles.descr}>{bannerTextDescription}</p>

      <Link
        href={
          submitBanner
            ? 'https://forms.gle/7ySdaZT7iMNFxQ9o8'
            : 'https://zksync.io/'
        }
        className={styles.link}
        target="_blank"
      >
        {linkText}
        {submitBanner && <ArrowRight className={styles.arrow__svg} />}
      </Link>
    </div>
  );
};
