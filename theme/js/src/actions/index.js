export const getContent = () => dispatch => {
  var url = '/api/pets';
  fetch(url)
  .then(res => res.json())
  .then(data => {
    dispatch(receiveContent(data));
  });
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

const CHANGE_DROPDOWN = 'CHANGE_DROPDOWN';
const selectA = (e, key) => ({
  type: CHANGE_DROPDOWN,
  //payload: {selectA: e.target.value},
  payload: {key: 'selectA', value: e.target.value},
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
  .then(data => dispatch({
     type: DELETE_POST,
     payload: postId
  }));
}


