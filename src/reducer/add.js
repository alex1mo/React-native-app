import add from "../action-type/add";
import utils from "../utils/utils.all";

const initialState = [];

export default function addReduser(state = initialState, action) {
  switch (action.type) {
    case add.ADD_ITEM:
      utils.storeData(
        "list",
        JSON.stringify([...state, { ...action.payload }])
      );
      return [...state, { ...action.payload }];
    case add.FETCH_LIST:
      return [...action.payload];
    default:
      return state;
  }
}
