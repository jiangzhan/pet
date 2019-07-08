import {getValueFromUrl} from '../utils/functions';

const selectA = getValueFromUrl('selectA');
const selectB = getValueFromUrl('selectB');
const selectC = getValueFromUrl('selectC');
const search = getValueFromUrl('search');

const initialState = {
 dropdowns: [
   {key: 'selectA', value: selectA === null ? 0 : Number(selectA)},
   {key: 'selectB', value: selectB === null ? 0 : Number(selectB)},
   {key: 'selectC', value: selectC === null ? 0 : Number(selectC)}
 ],
 search: {key: 'search', value: search === null ? '' : search}
};

export default function(state = initialState, action) {
  switch(action.type) {
    case 'CHANGE_DROPDOWN':
      return {
        ...state,
        dropdowns: state.dropdowns.map(item =>
          (item.key === action.payload.key)
          ? {...item, value: action.payload.value }
          : item
        )
      }
      case 'UPDATE_SEARCH':
        return {
          ...state,
          search: {value: action.payload} 
        }
    default:
     return state;
  }
}
