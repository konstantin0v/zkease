import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import styles from "./Layout.module.css";
import Sidebar from "./Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <div className={styles.main}>
        <Sidebar className={styles.sidebar} />
        <div className={styles.page}>{children}</div>
      </div>
      <Footer className={styles.footer} />
    </div>
  );
};

export default Layout;
