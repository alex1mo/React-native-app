import add from "../action-type/add";

let initialState = [];

export default function addReduser(state = initialState, action) {
  switch (action.type) {
    case add.ADD_ITEM:
      utils.storeData(
        "list",
        JSON.stringify([...state, { ...action.payload }])
      );
      return [...state, { ...action.payload }];
    case add.FETCH_LIST:
      return JSON.parse(action.payload);
    default:
      return state;
  }
}
