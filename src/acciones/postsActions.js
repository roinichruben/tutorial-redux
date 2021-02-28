export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_EXITO = 'GET_POSTS_EXITO';
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

// Acción que indica a Redux que obtenga los posts
export const accionGetPosts = () => ({
  type: GET_POSTS,
});
  
// Acción que pasa los posts obtenidos a Redux en caso de éxito
export const accionGetPostsExito = (posts) => ({
  type: GET_POSTS_EXITO,
  payload: posts,
});
  
// Acción que indica a Redux que ha ocurrido un error al obtener los posts
export const accionGetPostsError = () => ({
  type: GET_POSTS_ERROR,
});

// Combina los actions creators
export function getPosts() {
  return async (dispatch) => {

    dispatch(accionGetPosts());
  
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
  
      dispatch(accionGetPostsExito(data));
    } catch (error) {
      console.log(error);
      dispatch(accionGetPostsError());
    }
  }
}