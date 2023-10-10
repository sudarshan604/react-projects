import * as actions from "./actionType";
import {createAction,createReducer,createSlice} from "@reduxjs/toolkit"


let lastId = 0;

export const  removed =createAction("BUG_REMOVED")
export const  fixed =createAction("BUG_FIXED")

const taskSlice=createSlice({
    name:'tasks',
    initialState:[],
    reducers:{
        addTask:(state,action)=>{
          
            state.push({   //reduxt toolkit use immer underhood imuutable way we can write mutable way
              id: ++lastId,
              description: action.payload.description,
              resolved: false,
            }) 
    }
}})

export {addTask}=taskSlice.actions

export default taskSlice.reducer

// export default createReducer([],{
// [removed.type]:(state,action)=>{
//       state.push({   //reduxt toolkit use immer underhood imuutable way we can write mutable way
//         id: ++lastId,
//         description: action.payload.description,
//         resolved: false,
//       },)
//     },
//   [fixed.type]:(_state,_action)=>{
        
//   }
// })



// export default function reducer(state = [], action) {
//   if (action.type == actions.BUG_ADDED) {
//     return [
//       ...state,
//       {
//         id: ++lastId,
//         description: action.payload.description,
//         resolved: false,
//       },
//     ];
//   } else if (action.type === actions.BUG_REMOVED) {
//     return state.filter((bug) => bug.id !== action.payload.id);
//   } else if (action.type === actions.BUG_RESLOVED) {
//     return state.map((bug) =>
//       action.payload.id !== bug.id ? bug : { ...bug, resolved: true }
//     );
//   }

//   return state;
// }
