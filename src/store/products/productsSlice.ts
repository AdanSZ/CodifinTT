import { createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../utils/types'
import {v4 as uuidv4} from 'uuid';
import { getRandImg } from '../../utils/utils';


const initialValues: Product[] = [
    {
        id: uuidv4(),
        name: "Xbox 360",
        price: 2343.22,
        image: getRandImg(),
        category: {
            key: 'clothing',
            value: 'Clothing'
        }
    },
    {
      id: uuidv4(),
      name: "Xbox one",
      price: 200,
      image: getRandImg(),
      category: {
          key: 'clothing',
          value: 'Clothing'
      },
    },
    {
      id: uuidv4(),
      name: "iPhone 32",
      price: 249.99,
      image: getRandImg(),
      category: {
          key: 'clothing',
          value: 'Clothing'
      },
    },
    {
      id: uuidv4(),
      name: "Samsung S34",
      price: 500.32,
      image: getRandImg(),
      category: {
          key: 'clothing',
          value: 'Clothing'
      },
    },
    {
      id: uuidv4(),
      name: "Pants",
      price: 12303.22,
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
    removeProduct: (state, action: PayloadAction<string>) => {
      const currentState = [...current(state).items]
      const found = currentState.findIndex((item: Product) => item.id === action.payload)
      if(found >= 0){
        currentState.splice(found, 1)
        state.items = currentState
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addNewProduct, removeProduct } = producstSlice.actions

export default producstSlice.reducer