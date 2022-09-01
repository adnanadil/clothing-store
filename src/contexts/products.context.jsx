import { createContext, useEffect, useState } from 'react';

import { addCollectionAndDocuments, getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

import SHOP_DATA from '../shop-data.js';

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {

  useEffect (() => {
    //addCollectionAndDocuments('categories', SHOP_DATA);
    const newFunction = async () => {
      const items = await getCategoriesAndDocuments()
      console.log(items)
    }

    newFunction()
  },[])

  const [products, setProducts] = useState([]);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
