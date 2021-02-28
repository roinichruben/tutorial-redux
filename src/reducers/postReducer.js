import * as acciones from '../acciones/postActions';

export const estadoInicial = {
  post: {},
  errores: false,
  cargando: true,
}
  
export default function postReducer(estado = estadoInicial, accion) {
  switch (accion.type) {
    case acciones.GET_POST:
      return { ...estado, cargando: true };
    case acciones.GET_POST_EXITO:
      return { post: accion.payload, cargando: false, errores: false };
    case acciones.GET_POST_ERROR:
      return { ...estado, cargando: false, errores: true };
    default:
      return estado;
  }
}