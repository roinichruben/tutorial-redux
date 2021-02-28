export const GET_COMENTARIOS = 'GET_COMENTARIOS ';
export const GET_COMENTARIOS_EXITO = 'GET_COMENTARIOS_EXITO';
export const GET_COMENTARIOS_ERROR = 'GET_COMENTARIOS_ERROR';

// Acción que indica a Redux que obtenga los comentarios
export const accionGetComentarios = () => ({
  type: GET_COMENTARIOS,
});
    
// Acción que pasa los comentarios obtenidos a Redux en caso de éxito
export const accionGetComentariosExito = (comentarios) => ({
  type: GET_COMENTARIOS_EXITO,
  payload: comentarios,
});
    
// Acción que indica a Redux que ha ocurrido un error al obtener los comentarios
export const accionGetComentariosError = () => ({
  type: GET_COMENTARIOS_ERROR,
});

export function getComentarios(postId) {
  return async dispatch => {

    dispatch(accionGetComentarios());

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
      const data = await response.json();

      dispatch(accionGetComentariosExito(data));
    } catch (error) {
      console.log(error);
      dispatch(accionGetComentariosError());
    }
  }
}
