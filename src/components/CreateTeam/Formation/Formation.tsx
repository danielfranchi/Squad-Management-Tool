import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import styles from "./Formation.module.scss";

const Formation = () => {
  const dispatch = useDispatch();

  const [formation, setFormation] = useState<any>("");
  const arrayFormation = [
    "3-2-2-3",
    "3-2-3-1",
    "3-4-3",
    "3-5-2",
    "4-2-3-1",
    "4-3-1-1",
    "4-3-2",
    "4-4-2",
    "4-5-1",
    "5-4-1",
  ];

  useEffect(() => {
    dispatch({ type: "GET_FORMATION", payload: formation });
  }, [formation, dispatch]);

  return (
    <div className={styles.formation}>
      <label className={styles.label}>Formation </label>
      <select
        id="produtos"
        value={formation}
        onChange={(e: any) => setFormation(e.target.value)}
        className={styles.select}
      >
        <option value="" disabled>
          Selecione
        </option>
        {arrayFormation.map((itens: any) => (
          <option key={itens}>{itens}</option>
        ))}
      </select>
    </div>
  );
};

export default Formation;
