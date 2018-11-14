import GroceryCtrl from './controllers/grocery';

/**
 * 
 * 
 * @description Define grocery api routes
 * 
 * @param {*} router 
 */
const apiRouter = (router) => {
  //++ base path of api
  router.all('/', GroceryCtrl.home);
  
  router.get('/groceries', GroceryCtrl.getAllGroceries);
  router.post('/groceries', GroceryCtrl.addNewGrocery);
  router.put('/groceries/:id', GroceryCtrl.editGrocery);
  router.patch('/groceries/:id', GroceryCtrl.setPurchaseStatus);
  router.delete('/groceries/:id', GroceryCtrl.deleteGrocery);
  
  //++ not existing endpoint
  router.all('*', GroceryCtrl.notFound);

  return router;
}

export default apiRouter;