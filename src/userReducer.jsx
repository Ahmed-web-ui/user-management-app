import { createSlice } from "@reduxjs/toolkit";
import { userlist } from "./Data";

const userslice = createSlice({
    name: "users",
    initialState: userlist,
    reducers:{
        addUser: (state , action)=>{
            state.push(action.payload)
        },

        updateUser:(state, action)=>{
            const {id,name,email} = action.payload
            const uu = state.find(user=> user.id == id)
            if (uu) {
                uu.name = name,
                uu.email = email
            }
        },

        delUser:(state, action)=>{
            const {id} = action.payload
            const uu = state.find(user=> user.id == id)
            if (uu) {   
                return state.filter(f=> f.id !== id)
            }
        }
    }
})
export const {addUser,updateUser,delUser} = userslice.actions
export default userslice.reducer