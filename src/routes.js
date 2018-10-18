import Home from './routes/Home.html';
import RequestGet from './routes/1-request-get/RequestGet.html';
import RequestPost from './routes/2-request-post/RequestPost.html';
import Data from './routes/3-dados/Home.html';
import DataList from './routes/3-dados/List.html';
import DataAdd from './routes/3-dados/Add.html';
import DataUser from './routes/3-dados/User.html';
import Printing from './routes/4-impressao/Home.html';

export default {
  '/': Home,
  '/1-request-get': RequestGet,
  '/2-request-post': RequestPost,
  '/3-dados': Data,
  '/3-dados/add': DataAdd,
  '/3-dados/list': DataList,
  '/3-dados/user': DataUser,
  '/4-impressao': Printing,
};
