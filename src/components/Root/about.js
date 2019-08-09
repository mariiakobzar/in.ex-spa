import Handlebars from 'handlebars';
import RootTemplate from './about.hbs';

const Root = () => {
  const template = Handlebars.compile(RootTemplate);
  return template();
};

export default Root;
