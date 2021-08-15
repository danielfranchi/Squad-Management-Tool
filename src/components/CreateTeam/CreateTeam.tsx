import { addTeam } from "../../store/ducks/reducerTeam/action";
import TeamName from "../CreateTeam/TeamName/TeamName";
import Description from "../CreateTeam/Description/Description";
import Formation from "../CreateTeam/Formation/Formation";
import TeamWebsite from "../CreateTeam/TeamWebsite/TeamWebsite";
import TeamType from "../CreateTeam/TeamType/TeamType";
import Tags from "../CreateTeam/Tags/Tags";
import SearchPlayers from "../CreateTeam/SearchPlayers/SearchPlayers";
import { useDispatch, useSelector } from "react-redux";
import { StoreForm } from "../../store/ducks/reducerForm/types";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Redirect } from "react-router-dom";

import axios from "axios";
import styles from "./CreateTeam.module.scss";

const CreateTeam = () => {
  const dispatch = useDispatch();

  const [home, setHome] = useState<Boolean>(false);
  const [inputColor, setInputColor] = useState("");

  const teamName = useSelector((state: StoreForm) => state.form.TeamName);
  const description = useSelector((state: StoreForm) => state.form.Description);
  const formation = useSelector((state: StoreForm) => state.form.Formation);
  const teamWebSite = useSelector((state: StoreForm) => state.form.TeamWebsite);
  const teamType = useSelector((state: StoreForm) => state.form.TeamType);

  const toSave = (e: any) => {

    if (e.key === "Enter") {
      return null;
    }

    interface Input {
      name: string | undefined;
      description: string | undefined;
      type: string | undefined;
      formation: string | undefined;
      site: string | undefined;
    }

    const requisicao: Input = {
      name: teamName,
      description: description,
      type: teamType,
      formation: formation,
      site: teamWebSite,
    };

    if (
      (requisicao.name !== "") &&
      (requisicao.description !== "") &&
      (requisicao.site !== "") &&
      (requisicao.description !== undefined) &&
      (requisicao.name !== undefined) &&
      (requisicao.site !== undefined)
    ) {
      axios
        .post("https://rest-api-teamsandplayers.herokuapp.com/team", requisicao)
        .then((response) => dispatch(addTeam(response.data)));

      setHome(true);
    } else {
      setInputColor("#ed1b66");
      toast.error("campo obrigatório");
    }
  };

  return (
    <main className={styles.mainCreateTeam}>

      <Toaster />
      <header className={styles.header}>
        <h2>Create your team</h2>
      </header>

      <form>
        <h3>TEAM INFORMATION</h3>

        <div className={styles.form}>
          <div className={styles.formColumn}>
            <TeamName inputColor={inputColor} />
            <Description inputColor={inputColor} />
          </div>

          <div className={styles.formColumn}>
            <TeamWebsite inputColor={inputColor} />
            <TeamType />
            <Tags />
          </div>
        </div>

        <h3>CONFIGURE SQUAD</h3>

        <div className={styles.form}>
          <div className={styles.formColumn}>
            <Formation />
          </div>

          <div className={styles.formColumn}>
            <SearchPlayers />
          </div>
        </div>

        <button data-testid="btn" type="button" className={styles.save} onClick={toSave}>
          Save
        </button>
      </form>

      {home !== false && <Redirect to="/" />}
    </main>
  );
};

export default CreateTeam;
