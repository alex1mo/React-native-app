import add from "../action-type/add";

const addItem = data => {
  return {
    type: add.ADD_ITEM,
    payload: data
  };
};

export default {
  addItem
};
