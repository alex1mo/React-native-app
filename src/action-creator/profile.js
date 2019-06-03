import profile from "../action-type/profile";

const setFormData = data => {
  return {
    type: profile.SET_FORM_DATA,
    payload: data
  };
};

export default {
  setFormData
};
