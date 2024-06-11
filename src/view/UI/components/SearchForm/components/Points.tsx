import styles from "./styles/point.module.scss";

export const Points = () => {
  return (
    <div className={styles.points}>
      <div className={styles.point}></div>
      <div className={styles.line}></div>
      <div className={styles.point}></div>
    </div>
  );
};
