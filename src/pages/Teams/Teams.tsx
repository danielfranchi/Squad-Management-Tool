import Header from "../../components/Header/Header";
import CreateTeam from "../../components/CreateTeam/CreateTeam";
import Footer from "../../components/Footer/Footer";

import styles from "./Teams.module.scss";

const Teams = () => {
  return (
    <div className={styles.container}>
      <Header />
      <CreateTeam />
      <Footer />
    </div>
  );
};

export default Teams;
