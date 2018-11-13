class APICtrl {
  /**
   * 
   * @description Base route path controller action
   * 
   * @param {*} request 
   * @param {*} response
   * 
   * @memberof APICtrl
   */
  static home(request, response) {
    response.status(200).json({
      message: 'Welcome to grocery store api'
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
   *  @memberof APICtrl
   */
  static notFound(request, response) {
    response.status(200).json({
      message: 'Endpoint requested does not exist'
    });
  }
}

export default APICtrl;
