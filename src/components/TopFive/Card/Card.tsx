import styles from "./Card.module.scss";

const Card = () => {
  return (
    <section>
      <div className={styles.card}>
        <p>Most picked player</p>
        <div className={styles.initialName}>
          <span>CR</span>
        </div>
      </div>

      <div className={styles.card}>
        <p>Less picked player</p>
        <div className={styles.initialName}>
          <span>R9</span>
        </div>
      </div>
    </section>
  );
};

export default Card;
