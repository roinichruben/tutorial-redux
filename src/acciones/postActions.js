export const GET_POST = 'GET_POST';
export const GET_POST_EXITO = 'GET_POST_EXITO';
export const GET_POST_ERROR = 'GET_POST_ERROR';

// Acción que indica a Redux que obtenga un post
export const accionGetPost = () => ({
  type: GET_POST,
});
    
// Acción que pasa el post obtenido a Redux en caso de éxito
export const accionGetPostExito = (post) => ({
  type: GET_POST_EXITO,
  payload: post,
});

// Acción que indica a Redux que ha ocurrido un error al obtener el post
export const accionGetPostError = () => ({
  type: GET_POST_ERROR,
});

export function getPost(postId) {
  return async dispatch => {

    dispatch(accionGetPost());

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      const data = await response.json();

      dispatch(accionGetPostExito(data));
    } catch (error) {
      console.log(error);
      dispatch(accionGetPostError());
    }
  }
}
