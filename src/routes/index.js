import { Switch, Route, Router } from 'react-router-dom';
import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import Transaction from '../pages/Transaction';
import history from './history';

const RouteIndex = () => {
  return(
    <Router history={history}>
      <Switch>
        {/* NOTE: PATH FOR DASHBOARD  */}
        <Route path="/" exact={true}>
          <Layout>
            <Dashboard />
          </Layout>
        </Route>
        {/*  PATH FOR TRANSACTION  */}
        <Route path="/transaction" >
          <Layout>
            <Transaction />
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}

export default RouteIndex;
