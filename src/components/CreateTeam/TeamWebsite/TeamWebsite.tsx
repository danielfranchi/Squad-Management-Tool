import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import styles from "./TeamWebsite.module.scss";

const TeamWebsite = ({ inputColor }: any) => {
  const dispatch = useDispatch();

  const [site, setSite] = useState<string>("");

  useEffect(() => {
    dispatch({ type: "GET_TEAM_WEBSITE", payload: site });
  }, [site, dispatch]);

  return (
    <>
      <label className={styles.label}>Team WebSite</label>
      <br />
      <input
        type="url"
        placeholder="http://myteam.com"
        required
        value={site}
        onChange={(e) => setSite(e.target.value)}
        style={{
          borderColor: inputColor,
          borderWidth: "1px",
          borderStyle: "solid",
        }}
        className={styles.input}
        data-testid="inputSite"
      />
    </>
  );
};

export default TeamWebsite;
