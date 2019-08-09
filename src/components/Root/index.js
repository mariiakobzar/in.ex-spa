import Handlebars from 'handlebars';
import './helpers/test';
import Data from './products.json';
import RootTemplate from './index.hbs';

const Root = () => {
  const template = Handlebars.compile(RootTemplate);
  return template(Data);
};

export default Root;
