import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import styles from "./TeamName.module.scss";

const TeamName = ({ inputColor }: any) => {
  const dispatch = useDispatch();

  const [name, setNome] = useState<string>("");

  useEffect(() => {
    dispatch({ type: "GET_TEAM_NAME", payload: name });
  }, [name, dispatch]);

  return (
    <>
      <label className={styles.label}>Team name</label>
      <input
        type="text"
        placeholder="Insert team name"
        value={name}
        onChange={(e) => setNome(e.target.value)}
        required
        style={{
          borderColor: inputColor,
          borderWidth: "1px",
          borderStyle: "solid",
        }}
        className={styles.input}
        data-testid="textInput"
      />
    </>
  );
};

export default TeamName;
