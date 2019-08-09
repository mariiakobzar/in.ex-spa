import Index from '../components/index';
import About from '../components/about';
import Shop from '../components/shop';
import Forum from '../components/forum';
import Contact from '../components/contact';

const Router = {
  '/': Index(),
  '/shop': Shop(),
  '/about': About(),
  '/forum': Forum(),
  '/contact': Contact(),
};

export default Router;
