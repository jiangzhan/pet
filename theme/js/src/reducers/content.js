const initialState = {
 items: []
};

export default function(state = initialState, action) {
  switch(action.type) {
    case 'GET_CONTENT':
      return {
        ...state,
        items: action.payload
      }
    case 'DELETE_POST':
      return {
        ...state,
        items: state.items.map(item =>
          (item.id === action.payload)
          ? {...item, deleted: !item.deleted}
          : item
      )}
    default:
     return state;
  }
}
