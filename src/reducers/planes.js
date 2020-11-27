const planesReducerDefaultState = []

export default (state = planesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_PLANE':
      return [
        ...state,
        action.plane
      ]        
    default:
      return state;
  }
}