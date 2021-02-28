import {combineReducers} from 'redux';

import postsReducer from './postsReducer';
import postReducer from './postReducer';
import comentariosReducer from './comentariosReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  post: postReducer,
  comentarios: comentariosReducer,
});

export default rootReducer;