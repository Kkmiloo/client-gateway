export enum ProductTCP {
  CREATE = 'CREATE_PRODUCT',
  FIND_ALL = 'FIND_ALL_PRODUCTS',
  FIND_ONE = 'FIND_ONE_PRODUCT',
  UPDATE = 'UPDATE_PRODUCT',
  DELETE = 'DELETE_PRODUCT',
}

export enum OrderTCP {
  CREATE = 'createOrder',
  FIND_ALL = 'findAllOrders',
  FIND_ONE = 'findOneOrder',
  CHANGE_ONE = 'changeOrderStatus',
}
