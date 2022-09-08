import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { cartReducer } from './cart/cart.reducer';
import categories from './categories/categories-slice';


export const rootReducer = combineReducers({
  user: userReducer,
  categories: categories,
  cart: cartReducer
});
