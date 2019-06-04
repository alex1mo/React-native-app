import signup from "../action-type/signup";

const setFormData = data => {
  return {
    type: signup.SET_FORM_DATA,
    payload: data
  };
};

const auth = data => {
  return {
    type: signup.AUTH,
    payload: data
  };
};

const loading = () => {
  return {
    type: signup.LOADING
  };
};

export default {
  setFormData,
  auth,
  loading
};
