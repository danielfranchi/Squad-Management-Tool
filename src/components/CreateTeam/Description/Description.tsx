import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import styles from "./Description.module.scss";

const Description = ({ inputColor }: any) => {
  const dispatch = useDispatch();

  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    dispatch({ type: "GET_DESCRIPTION", payload: description });
  }, [description, dispatch]);

  return (
    <>
      <label className={styles.label}>Description</label>
      <textarea
        name="text"
        cols={30}
        rows={10}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{
          borderColor: inputColor,
          borderWidth: "1px",
          borderStyle: "solid",
        }}
        className={styles.textarea}
      />
    </>
  );
};

export default Description;
