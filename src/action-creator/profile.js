import profile from "../action-type/profile";

const getFormData = data => {
  return {
    type: signup.GET_DATA_FORM,
    payload: data
  };
};

export default {
  getFormData
};
