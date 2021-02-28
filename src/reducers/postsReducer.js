import * as acciones from '../acciones/postsActions';

export const estadoInicial = {
  posts: [],
  errores: false,
  cargando: false,
}
  
export default function postsReducer(estado = estadoInicial, accion) {
  switch (accion.type) {
    case acciones.GET_POSTS:
      return { ...estado, cargando: true };
    case acciones.GET_POSTS_EXITO:
      return {posts: accion.payload, cargando: false, errores: false}
    case acciones.GET_POSTS_ERROR:
      return {...estado, cargando: false, errores: true}
    default:
      return estado;
  }
}