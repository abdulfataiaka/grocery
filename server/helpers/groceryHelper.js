class GroceryHelper {
  /**
   * 
   * 
   * @description Validate grocery details
   * 
   * @param { Object } grocery
   * 
   * @memberof GroceryHelper
   */
  static validateGrocery(grocery) {
    const self = GroceryHelper;
    const errors = [
      'Grocery name cannot be empty',
      'Provide valid price for grocery',
      'Grocery must have an image url',
    ];

    if (!self.isNonEmptyObject(grocery)) {
      return errors;
    }

    const { name, price, image } = grocery;
    if (typeof name !== 'string' || !name.trim().length) {
      return [ errors[0] ];
    }

    if (typeof price !== 'string' || !price.trim().length) {
      return [ errors[1] ];
    }

    if (typeof image !== 'string' || !image.trim().length) {
      return [ errors[2] ];
    }

    return null;
  }

  /**
   *
   * 
   * @description Check if non empty object
   *
   * @static
   * 
   * @param {*} argument
   * 
   * @returns {Boolean}
   * 
   * @memberof GroceryHelper
   */
  static isNonEmptyObject(argument) {
    return (
      argument !== null &&
      !Array.isArray(argument) &&
      typeof argument === 'object'
    );
  }
}

export default GroceryHelper;
