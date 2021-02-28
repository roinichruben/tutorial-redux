import React, {useEffect} from 'react';
import {connect} from 'react-redux';

// Importamos la acción getPosts
import {getPosts} from '../acciones/postsActions';
import {Post} from '../componentes/Post';


const PaginaPosts = ({dispatch, posts, cargando, errores}) => {

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);


  // Función que muestra la lista de posts
  const mostrarPosts = () => {

    if (cargando) return <p>Cargando posts...</p>
    if (errores) return <p>Ha ocurrido un error.</p>

    return posts.map((post) => <Post key={post.id} post={post} resumen={true} />);
  }

  return (
    <div className="container">
      <h1 className="mb-4">Posts</h1>
      <hr/>
      {mostrarPosts()}
    </div>
  );
}

// Mapeo del estado de Redux con las propieades del componente
const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  errores: state.posts.errores,
  cargando: state.posts.cargando,
});

// Conexión de React con redux
export default connect(mapStateToProps)(PaginaPosts);