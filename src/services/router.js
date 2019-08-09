import Root from '../components/Root';
import About from '../components/Root/about';
import Shop from '../components/Root/shop';
import Forum from '../components/Root/forum';
import Contact from '../components/Root/contact';

const Router = {
  '/': Root(),
  '/shop': Shop(),
  '/about': About(),
  '/forum': Forum(),
  '/contact': Contact(),
};

export default Router;
