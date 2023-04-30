import Link from "next/link";
import styles from "./Banner.module.css";
import { ArrowRight } from "..";
import clsx from "clsx";

export const Banner = ({
  linkText,
  bannerTextTitle,
  bannerTextDescription,
  submitBanner = false,
}) => {
  return (
    <div
      className={clsx(
        styles.bannerItem,
        submitBanner && styles.backgroundSubmitBanner
      )}
    >
      <span>{bannerTextTitle}</span>
      <span className={styles.bannerTextDescription}>
        {bannerTextDescription}
      </span>

      <Link href="#" className={styles.bannerLink}>
        <span>{linkText}</span>
        <ArrowRight />
      </Link>
    </div>
  );
};

export default Banner;
