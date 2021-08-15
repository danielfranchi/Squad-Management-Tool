import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import styles from "./TeamType.module.scss";

const TeamType = () => {
  const dispatch = useDispatch();

  const [radio, setRadio] = useState<string>("");

  useEffect(() => {
    dispatch({ type: "GET_TEAM_TYPE", payload: radio });
  }, [radio, dispatch]);

  return (
    <>
      <label className={styles.label}>Team Type</label>
      <div className={styles.input}>
        <label>
          <input
            checked={radio === "real"}
            value="real"
            type="radio"
            style={{ width: "10px" }}
            onChange={(e) => setRadio(e.target.value)}
          />
          Real
        </label>
        <label>
          <input
            checked={radio === "fantasy"}
            value="fantasy"
            type="radio"
            style={{ width: "10px" }}
            onChange={(e) => setRadio(e.target.value)}
          />
          Fantasy
        </label>
      </div>
    </>
  );
};

export default TeamType;
