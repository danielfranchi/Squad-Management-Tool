import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineShareAlt } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { ItemTeam, dataTeam } from "../../store/ducks/reducerTeam/types";
import { getTeam, deleteTeam } from "../../store/ducks/reducerTeam/action";
import ModalEdit from "./ModalEdit/ModalEdit";
import axios from "axios";

import styles from "./MyTeams.module.scss";

const MyTeams = () => {
  const dispatch = useDispatch();

  const [edit, setEdit] = useState<Boolean>(false);
  const [ids, setIds] = useState(null);

  const teams = useSelector((state: dataTeam) => state.team.arrayTeam);

  const sorted = (e: any) => {
    if (e.target.innerText === "Name") {
      let sortedTeam: any = [...teams];
      sortedTeam.sort((a: any, b: any) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      dispatch(getTeam(sortedTeam));
    }

    if (e.target.innerText === "Description") {
      let sortedTeam: any = [...teams];
      sortedTeam.sort((a: any, b: any) => {
        if (a.description < b.description) {
          return -1;
        }
        if (a.description > b.description) {
          return 1;
        }
        return 0;
      });
      dispatch(getTeam(sortedTeam));
    }
  };

  const remove = (id: any) => {
    axios.delete(`https://rest-api-teamsandplayers.herokuapp.com/team/${id}`).then((resposta) => {
      if (resposta.status === 200 || resposta.status === 201) {
        dispatch(deleteTeam(id));
      }
    });
  };

  const toEdit = (id: any) => {
    setIds(id);
    setEdit(true);
  };

  return (
    <div className={styles.containerMyTeams}>
      <nav className={styles.headerMyTeams}>
        <>
          <h2 data-testid="title" style={{ color: "royalblue" }}>My teams</h2>
        </>
        <>
          <NavLink to="/teams" exact className={styles.navLink} data-testid="btn-nav">
            +
          </NavLink>
        </>
      </nav>

      <main className={styles.main}>
        <table>
          <thead>
            <tr>
              <th onClick={sorted}>
                <strong className={styles.button}>Name</strong>
              </th>
              <th onClick={sorted}>
                <strong className={styles.button}>Description</strong>{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {teams !== null &&
              teams.map((items: ItemTeam) => (
                <tr key={items.id} className={styles.tr}>
                  <td>{items.name}</td>
                  <td>{items.description}</td>
                  <td>
                    <button onClick={() => remove(items.id)}>
                      <MdDelete />
                    </button>
                  </td>
                  <td>
                    <button onClick={() => toEdit(items.id)}>
                      <FiEdit3 />
                    </button>
                  </td>
                  <td>
                    <button>
                      <AiOutlineShareAlt />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        {edit ? <ModalEdit setEdit={setEdit} ids={ids} /> : null}
        <div id="portal"></div>
      </main>
    </div>
  );
};

export default MyTeams;
