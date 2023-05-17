import Link from 'next/link';
import styles from './Banner.module.css';
import clsx from 'clsx';
import { ArrowRight, Zksync, Zksynclogo } from '@/components';

export const Banner = ({
  linkText,
  bannerTextTitle,
  bannerTextDescription,
  submitBanner = false,
}) => {
  return (
    <div className={clsx(styles.banner, submitBanner && styles.submit)}>
      {!submitBanner && <Zksync />}
      <h3 className={styles.title}>{bannerTextTitle}</h3>
      <p className={styles.descr}>{bannerTextDescription}</p>

      <Link href="/" className={styles.link}>
        {linkText}
        {submitBanner && <ArrowRight className={styles.arrow__svg} />}
      </Link>
    </div>
  );
};
