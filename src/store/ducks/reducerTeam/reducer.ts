import { ItemTeam, arrayTeam, TypesTeam } from "./types";

const initialState: arrayTeam = {
  arrayTeam: [],
};

function reducerTeam(state = initialState, action: any) {
  switch (action.type) {
    case TypesTeam.GET_TEAM:
      return {
        arrayTeam: action.payload,
      };

    case TypesTeam.ADD_TEAM:
      const newArray = [...state.arrayTeam, action.payload];

      return {
        arrayTeam: newArray,
      };

    case TypesTeam.DELETE_TEAM:
      const id = action.payload;

      const newArrayDelete = [...state.arrayTeam].filter((item: ItemTeam) => {
        return item.id !== id;
      });

      return {
        arrayTeam: newArrayDelete,
      };

    case TypesTeam.EDIT_TEAM:
      const arrayToEdit = [...state.arrayTeam].filter((n) => {
        return n.id !== action.payload.id;
      });

      const newToEdit = [...arrayToEdit, action.payload];

      return {
        arrayTeam: newToEdit,
      };

    default:
      return state;
  }
}

export default reducerTeam;
