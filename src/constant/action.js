import * as actions from "./actionTypes";

export function fetchPlayersData(data) {
  return {
    type: actions.FETCH_PLAYER_DATA,
    payload: {
      data,
    },
  };
}
