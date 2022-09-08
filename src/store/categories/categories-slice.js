import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';


export const fetchCategoriesStartAsync = createAsyncThunk('categories/fetchCategoriesStartAsync', async () => {
    const categoriesArray = await getCategoriesAndDocuments('categories');
    return categoriesArray
})


const categoriesSlice = createSlice({

    name: 'categories',
    
    initialState: {
        categories: [],
        isLoading: false,
        error: null,
    }, 

    reducers: {
    }, 
    extraReducers(builder) {
        builder
        .addCase(fetchCategoriesStartAsync.pending, (state, action) => {
        state.isLoading = true
        })
        .addCase(fetchCategoriesStartAsync.fulfilled, (state, action) => {
        state.isLoading = false
        state.categories = action.payload
        })
        .addCase(fetchCategoriesStartAsync.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error
        })
    }
})

export default categoriesSlice.reducer
