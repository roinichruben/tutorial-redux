import * as acciones from '../acciones/comentariosActions';

export const estadoInicial = {
  errores: false,
  cargando: true,
  comentarios: [],
}

export default function comentariosReducer(estado = estadoInicial, accion) {
  switch (accion.type) {
    case acciones.GET_COMENTARIOS:
      return { ...estado, cargando: true };
    case acciones.GET_COMENTARIOS_EXITO:
      return { ...estado, comentarios: accion.payload, cargando: false, errores: false };
    case acciones.GET_COMENTARIOS_ERROR:
      return { ...estado, cargando: false, errores: true };
    default:
      return estado;
  }
}
