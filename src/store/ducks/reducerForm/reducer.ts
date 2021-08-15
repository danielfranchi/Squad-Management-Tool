import { Form } from "./types";

const initialStateForm: Form = {
  TeamName: "",
  Description: "",
  Formation: "",
  TeamWebsite: "",
  TeamType: "",
};

function reducerForm(state = initialStateForm, action: any) {
  switch (action.type) {
    case "GET_TEAM_NAME":
      return {
        TeamName: action.payload,
      };

    case "GET_DESCRIPTION":
      return {
        ...state,
        Description: action.payload,
      };

    case "GET_FORMATION":
      return {
        ...state,
        Formation: action.payload,
      };

    case "GET_TEAM_WEBSITE":
      return {
        ...state,
        TeamWebsite: action.payload,
      };

    case "GET_TEAM_TYPE":
      return {
        ...state,
        TeamType: action.payload,
      };

    default:
      return state;
  }
}

export default reducerForm;
