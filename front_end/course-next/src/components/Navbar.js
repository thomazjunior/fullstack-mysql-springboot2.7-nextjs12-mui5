import styles from "./navbar.module.css";

function Navbar({ children }) {
  return (
    <div>
          <div className={styles.header}>
              <h2>Titulo</h2>
              <p>Logo</p>
      </div>
      {children}
    </div>
  );
}

export default Navbar;
