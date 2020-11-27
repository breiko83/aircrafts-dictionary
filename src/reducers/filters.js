const filtersReducerDefaultState = {
  sortBy: "range",
};

export default (state = filtersReducerDefaultState, action) => {  
  switch (action.type) {
    case "SORT_BY_PASSENGER":
      return {
        ...state,
        sortBy: "passengers",
      };
    case "SORT_BY_SPEED":
      return {
        ...state,
        sortBy: "speed",
      };
    case "SORT_BY_RANGE":
      return {
        ...state,
        sortBy: "range",
      };
    default:
      return state;
  }
};
