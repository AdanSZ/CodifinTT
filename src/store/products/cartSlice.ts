import { createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../utils/types'


export interface Cart extends Product {
  qty: number
}
export interface CartSlice {
  items: Cart[]
}

const initialState: CartSlice = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeItem: (state, action: PayloadAction<string>) => {
      const currentState = [...current(state).items]
      const found = currentState.findIndex((item: Cart) => item.id === action.payload)
      if(found >= 0){
        currentState.splice(found, 1)
        state.items = currentState
      }
    },
    addItemToCart: (state, action: PayloadAction<Cart>) => {
      const newStateValue = [...current(state).items]
      if(!newStateValue.length){
        newStateValue.push(action.payload)
        state.items = newStateValue
      } else {
        const found = newStateValue.findIndex((item: Cart) => item.id === action.payload.id)
        if(found >= 0) {
          const currentElement = {...newStateValue[found]}
          currentElement.qty += action.payload.qty
          newStateValue[found] = currentElement
        } else {
          newStateValue.push(action.payload)
        }
        state.items = newStateValue
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItemToCart, removeItem } = cartSlice.actions

export default cartSlice.reducer