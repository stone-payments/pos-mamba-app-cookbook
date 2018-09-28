import Home from './routes/Home.html';
import Request from './routes/Request.html';
import Data from './routes/Data/Home.html';
import DataTemplate from './routes/Data/Data.html';
import DataList from './routes/Data/List.html';
import DataSave from './routes/Data/Save.html';
import DataCheck from './routes/Data/Check.html';

export default {
  '/': Home,
  '/request': Request,
  '/data': Data,
  '/data/*': DataTemplate,
  '/data/save': DataSave,
  '/data/list': DataList,
  '/data/check/:user': DataCheck,
};
