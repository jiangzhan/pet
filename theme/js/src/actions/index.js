export const getContent = (filter) => dispatch => {
  var url = '/api/pets';
  const formData = new FormData();
  for (var key in filter) {
    formData.append(key, filter[key]);
  }
  fetch(url, {
    method: 'POST',
    body: formData,
  })
  .then(res => res.json())
  .then(data => {
    dispatch(receiveContent(data));
  })
  .catch(error => console.error('Error:', error));
}

const GET_CONTENT = 'GET_CONTENT';
const receiveContent = data => {
  return {
    type: GET_CONTENT,
    payload: data.result,
  }
}

export const changeDropdown = function(e, key) {
  switch(key) {
    case 'selectA':
      return (dispatch) => {dispatch(selectA(e, key))};
    case 'selectB':
      return (dispatch) => {dispatch(selectB(e, key))};
    case 'selectC': 
      return (dispatch) => {dispatch(selectC(e, key))};
  }
}

export const updateSearch = (e) => (dispatch) => {
  return dispatch(search(e));
}

const UPDATE_SEARCH = 'UPDATE_SEARCH';
const search = (e) => ({
  type: UPDATE_SEARCH,
  payload: e.target.value,
  pushToUrl: {
    search: e.target.value
  }
});

const CHANGE_DROPDOWN = 'CHANGE_DROPDOWN';
const selectA = (e, key) => ({
  type: CHANGE_DROPDOWN,
  payload: {key: key, value: e.target.value},
  pushToUrl: {
    selectA: e.target.value
  }
});

const selectB = (e, key) => ({
  type: CHANGE_DROPDOWN,
  payload: {key: key, value: e.target.value},
  pushToUrl: {
    selectB: e.target.value
  }
});
const selectC = (e, key) => ({
  type: CHANGE_DROPDOWN,
  payload: {key: key, value: e.target.value},
  pushToUrl: {
    selectC: e.target.value
  }
});

const DELETE_POST = 'DELETE_POST';
export const deletePost = postId => dispatch => {
  var url = '/api/delete-post/';
  const formData = new FormData();
  formData.append('id', postId);
  
  fetch(url, {
    method: 'POST',
    body: formData,
  })
  .then(res => res.json()) // parses JSON response into native JavaScript objects 
  .then(data => dispatch({
     type: DELETE_POST,
     payload: postId
  }))
  .catch(error => console.error('Error:', error));
}


