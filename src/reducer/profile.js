import profile from "../action-type/profile";

const initialState = {
  name: "name",
  age: "age",
  phone: "phone",
  email: "email",
  image: null
};

export default function profileReduser(state = initialState, action) {
  switch (action.type) {
    case profile.SET_FORM_DATA:
      return { ...state, ...action.payload };
    case profile.GET_USER_DATA:
      return { ...state, ...JSON.parse(action.payload) };
    default:
      return state;
  }
}
