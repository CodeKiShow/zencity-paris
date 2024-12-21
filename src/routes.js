
import ZenSpots from './components/ZenSpots';
import Restaurants from './components/Restaurants';
import ThematicRoutes from './components/ThematicRoutes';
import UserProfile from './components/UserProfile';

const routes = [
  {
    path: '/',
    component: ZenSpots,
    exact: true
  },
  {
    path: '/restaurants',
    component: Restaurants
  },
  {
    path: '/parcours',
    component: ThematicRoutes
  },
  {
    path: '/profile',
    component: UserProfile
  }
];

export default routes;
