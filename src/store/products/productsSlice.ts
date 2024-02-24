import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../utils/types'
import {v4 as uuidv4} from 'uuid';
import { getRandImg } from '../../utils/utils';


const initialValues: Product[] = [
    {
        id: uuidv4(),
        name: "Test Element 1",
        price: 100,
        image: getRandImg(),
        category: {
            key: 'clothing',
            value: 'Clothing'
        }
    },
    {
      id: uuidv4(),
      name: "Test Element 2",
      price: 100,
      image: getRandImg(),
      category: {
          key: 'clothing',
          value: 'Clothing'
      },
    },
    {
      id: uuidv4(),
      name: "Test Element 3",
      price: 100,
      image: getRandImg(),
      category: {
          key: 'clothing',
          value: 'Clothing'
      },
    },
    {
      id: uuidv4(),
      name: "Test Element 4",
      price: 100,
      image: getRandImg(),
      category: {
          key: 'clothing',
          value: 'Clothing'
      },
    },
    {
      id: uuidv4(),
      name: "Test Element 5",
      price: 100,
      image: getRandImg(),
      category: {
          key: 'clothing',
          value: 'Clothing'
      },
    },
]

export interface ProductState {
  items: Product[] | []
}

const initialState: ProductState = {
  items: initialValues,
}

export const producstSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addNewProduct: (state, action: PayloadAction<Product>) => {
      const newStateValue = [...state.items, action.payload]
      state.items = newStateValue
    },
  },
})

// Action creators are generated for each case reducer function
export const { addNewProduct } = producstSlice.actions

export default producstSlice.reducer