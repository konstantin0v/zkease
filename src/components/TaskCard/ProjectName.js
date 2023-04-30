import styles from './taskCard.module.css';

export const ProjectName = ({ children, Logo }) => {
  let LogoIcon = Logo;
  return (
    <div className={styles.projectNameContainer}>
      <div className={styles.projectNameLogo}>{Logo && <LogoIcon />}</div>
      <div className={styles.projectNameText}>{children}</div>
    </div>
  );
};

export default ProjectName;
