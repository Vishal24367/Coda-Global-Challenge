import * as actions from "./actionTypes";
export default function reducer(state = { cart: [] }, action) {
  switch (
    action.type // case "": something
  ) {
    case actions.FETCH_PLAYER_DATA: {
      return {
        ...state,
        user: action.payload.data,
      };
    }

    case actions.ADD_PLAYER_TO_GAME: {
      let selected_players = [...state.players];
      selected_players = selected_players.filter(
        (p) => p["player_name"] !== action.payload.player["player_name"]
      );
      selected_players.push(action.payload.player);
      console.log({
        ...state,
        game_players: selected_players,
      });
      return {
        ...state,
        game_players: selected_players,
      };
    }
    case actions.REMOVE_PLAYER_FROM_GAME: {
      let selected_players = [...state.cart];
      selected_players = selected_players.filter(
        (p) => p["player_name"] !== action.payload.player_name["player_name"]
      );
      console.log(selected_players);
      return {
        ...state,
        game_players: selected_players,
      };
    }
    default:
      return state;
  }
}
