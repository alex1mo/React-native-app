import signup from "../action-type/signup";

const getFormData = data => {
  return {
    type: signup.GET_DATA_FORM,
    payload: data
  };
};

export default {
  getFormData
};
