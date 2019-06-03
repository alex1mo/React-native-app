import add from "../action-type/add";

const addItem = data => {
  return {
    type: add.ADD_ITEM,
    payload: data
  };
};

const fetchList = list => {
  return {
    type: add.FETCH_LIST,
    payload: list
  };
};

export default {
  fetchList,
  addItem
};
