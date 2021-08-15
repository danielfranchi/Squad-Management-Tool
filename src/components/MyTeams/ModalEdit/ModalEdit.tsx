import axios from "axios";
import React, { useRef, useState } from "react";
import ReactDom from "react-dom";
import { useDispatch } from "react-redux";
import { editTeam } from "../../../store/ducks/reducerTeam/action";

import styles from "../ModalEdit/ModalEdit.module.scss";

const ModalEdit = ({ setEdit, ids }: any) => {
  const modalRef = useRef();
  const portalDiv = document.getElementById("portal");

  const dispatch = useDispatch();

  const [name, setName] = useState<any>("");
  const [description, setDescription] = useState<any>("");

  const toUpdate = () => {
    const requsicao = {
      name: name,
      description: description,
    };

    axios
      .patch(`https://rest-api-teamsandplayers.herokuapp.com/team/${ids}`, requsicao)
      .then((resposta) => {
        console.log(resposta.data);
        if (resposta.status === 200) {
          dispatch(editTeam(resposta.data));
        }
      });

    setEdit(false);
    setDescription("");
  };

  const closeModal = (e: any) => {
    if (e.target === modalRef.current) {
      setEdit(false);
    }
  };
  return (
    portalDiv &&
    ReactDom.createPortal(
      <div
        className={styles.container}
        ref={(modalRef) => modalRef as unknown as HTMLInputElement}
        onClick={closeModal}
      >
        <div className={styles.modal}>
          <form className={styles.form} onSubmit={toUpdate}>
            <input
              className={styles.input}
              type="text"
              id="name"
              value={name}
              placeholder="Team"
              onChange={(e: any) => setName(e.target.value)}
            />

            <input
              className={styles.input}
              type="text"
              id="description"
              value={description}
              placeholder="Description"
              onChange={(e: any) => setDescription(e.target.value)}
            />

            <input className={styles.submit} type="submit" value="update" />
          </form>

          <button onClick={() => setEdit(false)}>X</button>
        </div>
      </div>,
      portalDiv
    )
  );
};

export default ModalEdit;
