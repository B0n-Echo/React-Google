export const initialState = {
  term: null
}

export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

const reducer = (state, action) => {
  
console.log("🚀 ~ file: reducer.js ~ line 10 ~ reducer ~ action", action);
  
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
          ...state,
          term: action.term,
      }
      break;
  
    default:
      return state;
      break;
  }
};

export default reducer;