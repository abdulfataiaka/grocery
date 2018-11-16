import GroceryItem from '../database/models/groceryItem';
import GroceryHelper from '../helpers/groceryHelper';
import { setLastId, getLastId } from '../database/models/autoCounter';
import { groceryItemsModelName } from '../helpers/constants'; 

class GroceryCtrl {
  /**
   * 
   * @description Base route path controller action
   * 
   * @param {*} request 
   * @param {*} response
   * 
   * @memberof GroceryCtrl
   */
  static home(request, response) {
    response.status(200).json({
      message: 'Welcome to grocery store api'
    });
  }

  static getAllGroceries(request, response) {
    GroceryItem.find({}, (error, groceries) => {
      if(error) {
        response.status(500).json({
          message: 'Error occured fetching all groceries',
          error
        }); return;
      }

      response.status(200).json({
        message: 'Groceries fetched successfully',
        groceries
      });
    });
  }

  /**
   * 
   * 
   * @description Add a new grocery to collection
   * 
   * @param {*} request 
   * @param {*} response 
   * 
   * @memberof GroceryCtrl
   */
  static addNewGrocery(request, response) {
    const grocery = request.body;
    const error = GroceryHelper.validateGrocery(grocery);

    if(error) {
      response.status(400).json({
        message: 'Error with grocery data payload provided',
        error
      }); return;
    }

    getLastId(groceryItemsModelName, (err, id) => {
      if(err) {
        response.status(500).json({
          message: 'Error occured while adding new grocery',
          err
        }); return;
      }

      const newGrocery = new GroceryItem(grocery);
      newGrocery._id = id + 1;
      newGrocery.purchased = false;

      newGrocery.save(saveError => {
        if (saveError) {
          response.status(500).json({
            message: 'Error occured while adding new grocery',
            saveError
          }); return;
        }

        setLastId(groceryItemsModelName, id + 1, (doneError) => {
          if(doneError) {
            response.status(500).json({
              message: 'Error occured while adding new grocery',
              doneError
            }); return;
          }
      
          response.status(201).json({
            message: 'Grocery created successfully',
            grocery: newGrocery
          });
        });
      });
    });
  }

  /**
   * 
   * 
   * @description Update grocery details
   * 
   * @param {*} request 
   * @param {*} response 
   * 
   * @memberof GroceryCtrl
   */
  static editGrocery(request, response) {
    const groceryUpdate = request.body;
    const groceryId = request.params.id;
    const error = GroceryHelper.validateGrocery(groceryUpdate);

    if(error) {
      response.status(400).json({
        message: 'Error with grocery update data provided',
        error
      }); return;
    }

    GroceryItem.findOne({ _id: groceryId }, (error, grocery) => {
      if (error) {
        response.status(500).json({
          message: 'Error occured while updating grocery',
          error
        }); return;
      }

      if(!grocery) {
        response.status(404).json({
          message: 'Grocery does not exist',
          groceryId
        }); return;
      }

      const keys = ['name', 'price', 'image'];
      keys.forEach((key) => {
        grocery[key] = groceryUpdate[key];
      });

      grocery.save(() => {
        response.status(200).json({
          message: 'Grocery updated successfully',
          grocery
        }); return;
      });
    });
  }

  /**
   * 
   * 
   * @description Set grocery purchased state
   * 
   * @param {*} request 
   * @param {*} response 
   * 
   * @memberof GroceryCtrl
   */
  static setPurchaseStatus(request, response) {
    const { purchased } = request.body;
    const groceryId = request.params.id;

    if (typeof purchased !== 'boolean') {
      response.status(400).json({
        message: 'Purchased value should be true or false',
        purchased
      }); return;
    }

    GroceryItem.findOne({ _id: groceryId }, (error, grocery) => {
      if (error) {
        response.status(500).json({
          message: 'Error occured while updating grocery',
          error
        }); return;
      }

      if(!grocery) {
        response.status(404).json({
          message: 'Grocery does not exist',
          groceryId
        }); return;
      }

      grocery.purchased = purchased;
      grocery.save(() => {
        response.status(200).json({
          message: 'Grocery updated successfully',
          grocery
        }); return;
      });
    });
  }

  /**
   * 
   * 
   * @description Delete grocery from collection
   * 
   * @param {*} request 
   * @param {*} response 
   * 
   * @memberof GroceryCtrl
   */
  static deleteGrocery(request, response) {
    const groceryId = request.params.id;

    GroceryItem.findOne({ _id: groceryId }, (error, grocery) => {
      if (error) {
        response.status(500).json({
          message: 'Error occured while deleting grocery',
          error
        }); return;
      }

      if(!grocery) {
        response.status(404).json({
          message: 'Grocery does not exist',
          groceryId
        }); return;
      }

      grocery.remove(() => {
        response.status(200).json({
          message: 'Grocery deleted successfully',
          groceryId
        }); return;
      });
    });
  }
  /**
   * 
   * 
   * @description Endpoint does not exist
   *
   * @param {*} request 
   * @param {*} response 
   *
   *  @memberof GroceryCtrl
   */
  static notFound(request, response) {
    response.status(200).json({
      message: 'Endpoint requested does not exist'
    });
  }
}

export default GroceryCtrl;
