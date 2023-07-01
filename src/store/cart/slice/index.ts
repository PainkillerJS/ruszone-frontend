import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type {
  AddToCartPayloadType,
  CartInitialStateType,
  ChangeQuatityPayloadType
} from '../interface';

const initialState: CartInitialStateType = {
  items: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<AddToCartPayloadType>) => {
      const isExistSize = state.items.some((item) => item.id === action.payload.id);

      if (!isExistSize) {
        state.items.push({ ...action.payload, id: state.items.length });
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    changeQuatity: (state, action: PayloadAction<ChangeQuatityPayloadType>) => {
      const { id, type } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        type === 'plus' ? (item.quantity += 1) : (item.quantity -= 1);
      }
    },
    reset: (state) => {
      state.items = [];
    }
  }
});
