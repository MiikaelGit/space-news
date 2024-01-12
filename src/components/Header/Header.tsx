import styles from "./Header.module.scss";
import Logo from "../../assets/logo.svg";
export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <img src={Logo} alt="" />
          <span>Space Flight News</span>
        </div>
        <div>
          <nav>
            <ul className={styles.list}>
              <li className={styles.itemList}>
                <a href="/">Home</a>
              </li>
              <li className={styles.itemList}>
                <a href="/">Trending</a>
              </li>
              <li className={styles.itemList}>
                <a href="/">Categories</a>
              </li>
              <li className={styles.itemList}>
                <a href="/">About us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
