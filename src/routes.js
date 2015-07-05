import React from 'react';
import {Route} from 'react-router';

import App from './App';
import Repos from './components/Repos';
import Repo from './components/Repo';

export default (
  <Route path='/' handler={App}>
    <Route name='repos' path='/repos' handler={Repos} />
    <Route path='/repo/:repo' handler={Repo} />
  </Route>
);
