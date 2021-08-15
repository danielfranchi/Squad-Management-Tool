import React, { useEffect } from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MyTeams from "../../components/MyTeams/MyTeams";
import TopFive from "../../components/TopFive/TopFive";
import { useDispatch } from "react-redux";
import { getTeam } from "../../store/ducks/reducerTeam/action";
import { getPlayers } from "../../store/ducks/reducerPlayers/action";
import axios from "axios";

import styles from "../Home/Home.module.scss";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://rest-api-teamsandplayers.herokuapp.com/team")
      .then((resposta) => dispatch(getTeam(resposta.data)));
  }, [dispatch]);

  useEffect(() => {
    axios
      .get("https://rest-api-teamsandplayers.herokuapp.com/player")
      .then((resposta) => dispatch(getPlayers(resposta.data)));
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div>
        <Header />
      </div>

      <main className={styles.main}>
        <div>
          <MyTeams />
        </div>

        <div>
          <TopFive />
        </div>
      </main>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
