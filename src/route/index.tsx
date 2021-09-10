import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  RouteProps
} from 'react-router-dom';

import Home from '../pages/home';
import Detail from '../pages/detail';
import Navigation from '../pages/navigation';



const ROUTE_CONFIG: Array<RouteProps> = [
  {
    path: '/detail',
    component: Detail,
    exact: true
  },
  {
    path: '/',
    component: Home,
    exact: true
  }
];

const getRoutes = () => {
  const loadedRoutes: React.ReactElement[] = ROUTE_CONFIG.map(item => {
    return (
      <Route 
        path={item.path}
        component={item.component}
        exact={item.exact}
        key={item.path as string }
      />
    )
  })

  return (
    <Router
      basename="/"
    >
      <Navigation />
      <Switch>
        {loadedRoutes}
      </Switch>
    </Router>
  );
}

export default getRoutes;
