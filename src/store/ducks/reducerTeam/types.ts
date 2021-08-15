export enum TypesTeam {
  GET_TEAM = "GET_TEAM",
  ADD_TEAM = "ADD_TEAM",
  DELETE_TEAM = "DELETE_TEAM",
  EDIT_TEAM = "EDIT_TEAM"
}

export interface ItemTeam {
  id: number;
  name: string;
  description: string;
  type: string
  formation: string
  site: string
}

export interface arrayTeam {
  arrayTeam: ItemTeam[];
}

export interface dataTeam {
  team: arrayTeam;
}
