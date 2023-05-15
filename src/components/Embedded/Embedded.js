import styles from './Embedded.module.css';
import { LinkSvg } from '@/components';
import Link from 'next/link';

export const Embedded = ({ initialData, journey, taskName }) => {
  return (
    <div className={styles.embedded}>
      <div className={styles.iframewrapper}>
        <p className={styles.iframe__text}>Try here</p>
        <Link
          href={initialData[journey]?.tasks[taskName].link}
          className={styles.iframe__link}
          target="_blank"
        >
          Open new tab
          <LinkSvg className={styles.iframe__svg} />
        </Link>
      </div>
      <iframe
        src={initialData[journey]?.tasks[taskName].link}
        width="100%"
        height="100%"
        className={styles.iframe}
      ></iframe>
    </div>
  );
};
