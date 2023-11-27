import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:'counter',
    initialState:{
        count:5
    },
    reducers:{
        increment:(state,action)=>{ 
            state.count += 1; // we can write {action.payload.data} to take values from function   
        }, //will recive valye as action.payload
        decrement:(state,action)=>{ 
            state.count -= 1;
        },
    }

});

export const {increment,decrement}= counterSlice.actions;
export default counterSlice.reducer;
