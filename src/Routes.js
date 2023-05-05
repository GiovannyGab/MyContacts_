import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Edit from './pages/Edit';
import NewContact from './pages/NewContact';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/new" component={NewContact} />
      <Route path="/edit/:id" component={Edit} />

    </Switch>
  );
}

export default Routes;
