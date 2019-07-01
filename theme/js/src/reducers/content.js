import {LOCATION_CHANGE} from 'react-router-redux';
import {getValueFromUrl} from '../utils/functions';


const selectA = getValueFromUrl('selectA');
const selectB = getValueFromUrl('selectB');
const selectC = getValueFromUrl('selectC');

const initialState = {
 items: [],
 filters: [
   {key: 'selectA', value: selectA === null ? 0 : Number(selectA)},
   {key: 'selectB', value: selectB === null ? 0 : Number(selectB)},
   {key: 'selectC', value: selectC === null ? 0 : Number(selectC)}
 ]
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
    case 'CHANGE_DROPDOWN':
          
         const newState = {
           ...state,
           filters: state.filters.map(item =>
             (item.key === action.payload.key)
             ? {...item, value: action.payload.value }
             : item
           ),
           items: state.items.map(item =>
           item = {...item, deleted: true}
           )
         }
         const newFilterdState = {
           ...newState,
           items: newState.items.map(item =>
            (item.tid == newState.filters[0].value || item.tid == newState.filters[1].value || item.tid == newState.filters[2].value)?
             {...item, deleted: false} : item
           )
         }
      return {
        ...state,
        ...newFilterdState
      }
    default:
     return state;
  }
}
