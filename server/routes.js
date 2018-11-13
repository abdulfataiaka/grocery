import APICtrl from './controllers/api';

const apiRouter = (router) => {
  //++ base path of api
  router.all('/', APICtrl.home);
  
  //++ not existing endpoint
  router.all('*', APICtrl.notFound);

  return router;
}

export default apiRouter;