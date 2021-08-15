import HighestAvgAge from "../TopFive/HighestAvgAge/HighestAvgAge";
import LowestAvgAge from "../TopFive/LowestAvgAge/LowestAvgAge";
import Card from "../TopFive/Card/Card";

import styles from "../TopFive/TopFive.module.scss";

const TopFive = () => {
  return (
    <div className={styles.tableTopFive}>
      <div className={styles.headerTopFive}>
        <h2 style={{ color: "royalblue" }}>Top 5</h2>
      </div>

      <div className={styles.tables}>
        <div>
          <HighestAvgAge title="Highest avg age" />
        </div>

        <div>
          <LowestAvgAge title="Lowest avg age" />
        </div>
      </div>

      <div>
        <Card />
      </div>
    </div>
  );
};

export default TopFive;
