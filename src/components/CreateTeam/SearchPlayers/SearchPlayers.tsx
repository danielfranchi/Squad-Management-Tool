import React, { useState } from "react";
import { useSelector } from "react-redux";
import { StorePlayers, ItemPlayers } from "../../../store/ducks/reducerPlayers/types";

import styles from "./SearchPlayers.module.scss";

const SearchPlayers = () => {
  const players = useSelector(
    (state: StorePlayers) => state.players.dataPlayers
  );

  const [search, setSearch] = useState("");
  const [results, setResults] = useState<any>(null);

  const pesquisa = (e: any) => {
    setSearch(e.target.value);
  };

  React.useEffect(() => {
    if (players !== null) {
      const resultsArray = players.filter((person: ItemPlayers) =>
        person.player.toLowerCase().includes(search)
      );
      setResults(resultsArray);
    }

    if (search === "") {
      setResults(null);
    }
  }, [search, players]);

  return (
    <div className={styles.gridSearch}>
      <label className={styles.label}>Search Players</label>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="search"
        id="search"
        value={search}
        onChange={pesquisa}
      />
      {results !== null &&
        results.map((item: ItemPlayers) => {
          if (results !== "") {
            return (
              <div key={item.id} className={styles.cardSearch}>
                <div className={styles.card}>
                  <span className={styles.span}>
                    <strong className={styles.strong}>Name: </strong>
                    {item.player}
                  </span>
                  <span className={styles.span}>
                    <strong className={styles.strong}>Nacionality: </strong>
                    {item.nacionality}
                  </span>
                </div>
                <>
                  <span className={styles.span}>
                    <strong className={styles.strong}>Age: </strong>
                    {item.age}
                  </span>
                </>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
};

export default SearchPlayers;
