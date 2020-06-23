const SET_BUSINESS = "appReducer/SET_BUSINESS";

const initState = {
  businesses: [],
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_BUSINESS:
      return {
        ...state,
        businesses: action.business,
      };

    default:
      return state;
  }
};

export const setBusiness = (business) => {
  return { type: SET_BUSINESS, business };
};


export default appReducer;
