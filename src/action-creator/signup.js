import signup from "../action-type/signup";

const getDataForm = data => {
  return {
    type: signup.GET_DATA_FORM,
    payload: data
  };
};

export default {
  getDataForm
};
