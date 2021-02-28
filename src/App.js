import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import { Menu } from './componentes/Menu';

import PaginaInicio from './paginas/PaginaInicio';
import PaginaPosts from './paginas/PaginaPosts';
import PaginaPost from './paginas/PaginaPost';

const App = () => {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/" component={PaginaInicio} />
        <Route exact path="/posts" component={PaginaPosts} />
        <Route exact path="/posts/:postId" component={PaginaPost} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App;