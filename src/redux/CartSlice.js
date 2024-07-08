import { createSlice } from "@reduxjs/toolkit";
import { iphone13 } from "../assets/images/images";
import { iphonex } from "../assets/images/images";
import  { last }  from "../assets/images/images";
import  { oppo }  from   "../assets/images/images";
import  {samsung}  from   "../assets/images/images"

export const cartSlice=createSlice({
    initialState:{
        items:[
            {
                "id": 1,
                "name": "iPhone 13",
                "description": "An apple mobile which is nothing like apple",
                "price": 549,
                "rating": 4.69,
                "quantity": 1,
                "thumbnail": iphone13
            },
            {
                "id": 2,
                "title": "iPhone X",
                "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
                "price": 899,
                "rating": 4.44,
                "quantity": 1,
                "thumbnail": iphonex
            },
            {
                "id": 3,
                "title": "Samsung Universe 9",
                "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
                "price": 699,
                "rating": 4.09,
                "quantity": 1,
                "thumbnail":samsung
            },
            {
                "id": 4,
                "title": "OPPOF19",
                "description": "OPPO F19 is officially announced on April 2021.",
                "price": 729,
                "rating": 4.3,
                "quantity": 1,
                "thumbnail": oppo
            },
            {
                "id": 5,
                "title": "Huawei P30",
                "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
                "price": 899,
                "rating": 4.09,
                "quantity": 1,
                "thumbnail": last
            }
        ],
        totalQuantity: 5,
        totalAmount: 3775
    },
    name:'cart',
    reducers:{
        incrementQuantity:(state,action)=>{
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
              item.quantity += 1;
              state.totalQuantity += 1;
              state.totalAmount += item.price;
            }
        },
        decrementQuantity:(state,action)=>{
            const item = state.items.find(item => item.id === action.payload);
            if (item && item.quantity > 0) {
              item.quantity -= 1;
              state.totalQuantity -= 1;
              state.totalAmount -= item.price;
            }
        }
        
    }
})

export const {incrementQuantity,decrementQuantity} = cartSlice.actions

export default cartSlice.reducer