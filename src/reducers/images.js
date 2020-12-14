export default (state = [], action) => {
  switch (action.type) {
    case "GET_ALL":
      return action.payload;
    case "UPLOAD":
      return [...state, action.payload];
    case "HIDE":
      return action.payload;
    case "DELETE_ALL":
      return action.payload;
    default:
      return state;
  }
};
