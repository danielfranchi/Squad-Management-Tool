import { TypesPlayers, ArrayPlayers } from "./types";

const initialStatePlayers: ArrayPlayers = {
  dataPlayers: [],
};

function reducerPlayers(state = initialStatePlayers, action: any) {
  switch (action.type) {
    case TypesPlayers.GET_PLAYER:
      return {
        dataPlayers: action.payload,
      };
    default:
      return state;
  }
}

export default reducerPlayers;
