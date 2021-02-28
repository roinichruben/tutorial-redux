import React, {useEffect} from 'react';
import {connect} from 'react-redux';

// Importamos la acción getPosts y el componente Post
import {getPost} from '../acciones/postActions';
import {Post} from '../componentes/Post';

// Importamos la acción getComentarios y el componente Comentario
import { getComentarios } from '../acciones/comentariosActions';
import { Comentario } from '../componentes/Comentario';

const PaginaPost = ({ match, dispatch, post, comentarios, errores, cargando }) => {

  useEffect(() => {
    const { postId } = match.params;
    dispatch(getPost(postId));
    dispatch(getComentarios(postId));
  }, [dispatch, match]);

  // Función que muestra un post
  const mostrarPost = () => {
    if (cargando.post) return <p>Cargando post...</p>
    if (errores.post) return <p>Ha ocurrido un error.</p>

    return <Post post={post} resumen={false} />
  }

  const mostrarComentarios = () => {
    if (cargando.comentarios) return <p>Cargando comentarios...</p>
    if (errores.comentarios) return <p>Ha ocurrido un error al obtener los comentarios.</p>

    return comentarios.map(comentario => (
      <Comentario key={comentario.id} comentario={comentario} />
    ));
  }

  return (
    <div className="container">
      {mostrarPost()}
      <h2>Comentarios</h2>
      {mostrarComentarios()}
    </div>
  )
}

const mapStateToProps = state => ({
  post: state.post.post,
  comentarios: state.comentarios.comentarios,
  errores: { post: state.post.errores },
  cargando: { post: state.post.cargando },
});

export default connect(mapStateToProps)(PaginaPost);
