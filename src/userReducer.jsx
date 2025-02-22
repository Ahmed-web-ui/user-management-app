import { createSlice } from "@reduxjs/toolkit";
import { userlist } from "./Data";

const userslice = createSlice({
    name: "users",
    initialState: userlist,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },

        updateUser: (state, action) => {
            const { id, name, email,role,status } = action.payload
            const uu = state.find(user => user.id == id)
            if (uu) {
                uu.name = name,
                    uu.email = email
                    uu.role= role
                    uu.status= status
            }
        },

        delUser: (state, action) => {
            const { id } = action.payload
            const uu = state.find(user => user.id == id)
            if (uu) {
                return state.filter(f => f.id !== id)
            }
        },
         // Action to update the user's role
    updateRole: (state, action) => {
        const { id, role } = action.payload;
        const user = state.find(user => user.id === id);
        if (user) {
          user.role = role;
        }
      },
  
      // Action to update the user's status
      updateStatus: (state, action) => {
        const { id, status } = action.payload;
        const user = state.find(user => user.id === id);
        if (user) {
          user.status = status;
        }
      },

    }
})
export const { addUser, updateUser, delUser,updateRole,updateStatus} = userslice.actions
export default userslice.reducer