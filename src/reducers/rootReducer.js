export const rootReducer = (state, action) => {
  switch (action.type) {
    case "PEOPLE-UPDATE":
      return {
        ...state,
        peopleList: action.payload,
      };
    case "PEOPLE-DELETE":
      return {
        ...state,
        peopleList: action.payload
      };
    case "PEOPLE-COPY":
      return {
        ...state,
        filteredList: action.payload
      };  
    default:
      return state;
  }
};