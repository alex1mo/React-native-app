import signup from "../action-type/signup";

const setFormData = data => {
  return {
    type: signup.SET_FORM_DATA,
    payload: data
  };
};

export default {
  setFormData
};
