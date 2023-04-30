import styles from './taskCard.module.css';
import {
  Multichain,
  Mintsquare,
  Mute,
  Nexon,
  Onchain,
  Unidex,
  Rhino,
  Spacefi,
  Orbiter,
  Syncswap,
  Zksync,
} from '@/components';

export const ProjectName = ({ children, tag }) => {
  const project = {
    'Multichain.org': <Multichain />,
    'Mintsquare.io': <Mintsquare />,
    'Mute.io': <Mute />,
    'Nexon.finance': <Nexon />,
    'Onchain.trade': <Onchain />,
    'Unidex.exchange': <Unidex />,
    'Rhino.fi': <Rhino />,
    'Spacefi.io': <Spacefi />,
    'Orbiter.finance': <Orbiter />,
    'Syncswap.xyz': <Syncswap />,
    'zkSync.io': <Zksync />,
  };

  return (
    <div className={styles.projectNameContainer}>
      <div className={styles.projectNameLogo}>{project[tag]}</div>
      <div className={styles.projectNameText}>{children}</div>
    </div>
  );
};

export default ProjectName;
