/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/

 'post /signup':'AccountController.signup',
 'post /login': 'LoginController.login',
 'get /todas-atividades': 'AtividadeController.atividadeTotal',
 'get /quizes-livres': 'QuizController.QuizesLivresConteudo',
 'post /pontuacao': 'PontuacaoController.verifyCreatePontuacao',
 'get /pontuacao-aluno': 'PontuacaoController.pontuacaoAluno',
 'get /pontuacao-colegio': 'PontuacaoController.pontuacaoColegio',

 'post /conteudo': 'ConteudoController.createConteudo',
 'get /conteudo/:id?': 'ConteudoController.getConteudo',
 'patch /conteudo/:id': 'ConteudoController.patchConteudo',
 'delete /conteudo/:id': 'ConteudoController.deleteConteudo',

 'get /quiz/:id?': 'QuizController.getQuizes',
 'patch /quiz/:id': 'QuizController.patchQuiz',
 'post /quiz': 'QuizController.createQuiz',
 'delete /quiz/:id': 'QuizController.deleteQuiz',
};
