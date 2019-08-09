import Handlebars from 'handlebars';
import RootTemplate from './forum.hbs';

const Root = () => {
  const template = Handlebars.compile(RootTemplate);
  return template();
};

export default Root;
