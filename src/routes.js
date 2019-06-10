import Home from './routes/Home.html';
import RequestGet from './routes/1-request-get/RequestGet.html';
import RequestPost from './routes/2-request-post/RequestPost.html';
import Dados from './routes/3-dados/Home.html';
import DadosNovo from './routes/3-dados/Add.html';
import DadosLista from './routes/3-dados/List.html';
import DadosUsuario from './routes/3-dados/User.html';
import Impressao from './routes/4-impressao/Home.html';

export default {
  '/': Home,
  '/1-request-get': RequestGet,
  '/2-request-post': RequestPost,
  '/3-dados': Dados,
  '/3-dados/add': DadosNovo,
  '/3-dados/list': DadosLista,
  '/3-dados/user': DadosUsuario,
  '/4-impressao': Impressao,
};
