import { Switch, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Edit from './pages/Edit';
import NewContact from './pages/NewContact';

function Routes() {
  const location = useLocation();

  useEffect(() => {
    console.log('A URL mudou para:', location.pathname);
  }, [location.pathname]);
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/new" component={NewContact} />
      <Route path="/edit/:id" component={Edit} />

    </Switch>
  );
}

export default Routes;
