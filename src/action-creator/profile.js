import profile from "../action-type/profile";

const getFormData = data => {
  return {
    type: profile.GET_DATA_FORM,
    payload: data
  };
};

export default {
  getFormData
};
