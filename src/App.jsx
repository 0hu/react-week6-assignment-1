import { Switch, Route } from 'react-router';

import Header from './Header';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/restaurants" component={RestaurantsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
