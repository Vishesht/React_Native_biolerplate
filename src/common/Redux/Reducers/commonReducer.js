const ApiReducer = (state = [], action) => {
  switch (action.type) {
    case "LIST":
      return { ...state, List: action.List }
      break
    default:
      return state;
  }
}
export default ApiReducer