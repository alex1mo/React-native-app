import header from "../action-type/header";

const setPage = page => {
  return {
    type: header.SET_PAGE,
    payload: page
  };
};

export default {
  setPage
};
