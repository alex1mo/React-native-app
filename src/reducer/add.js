import add from "../action-type/add";

let id = 0;
const initialState = [];

export default function addReduser(state = initialState, action) {
  switch (action.type) {
    case add.ADD_ITEM:
      return [...state, { ...action.payload, id: id++ }];
    default:
      return state;
  }
}
