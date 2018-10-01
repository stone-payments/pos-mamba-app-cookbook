import Home from './routes/Home.html';
import Request from './routes/1-request/Request.html';
import Data from './routes/2-dados/Home.html';
import DataList from './routes/2-dados/List.html';
import DataAdd from './routes/2-dados/Add.html';
import DataUser from './routes/2-dados/User.html';

export default {
  '/': Home,
  '/1-request': Request,
  '/2-dados': Data,
  '/2-dados/add': DataAdd,
  '/2-dados/list': DataList,
  '/2-dados/user': DataUser,
};
