import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import { fetchCategoriesStartAsync, setCategories } from '../../store/categories/category.action';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

const Shop = () => {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoriesStartAsync())
  }, []);


  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
