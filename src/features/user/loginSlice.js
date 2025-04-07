import { createSlice } from "@reduxjs/toolkit";
const initialState={
    isLoggedIn:window.localStorage.getItem('token')?true:false,
    role:window.localStorage.getItem('role'),
    username:window.localStorage.getItem("username"),
    id:window.localStorage.getItem("id")
}
export const loginSlice =createSlice({
    name:"loginSlice",
    initialState,
    reducers:{ 
        setUser:(state,action)=>{
            console.log(action)
            state.isLoggedIn=true;
            state.role=action.payload.role
            state.username = action.payload.username
            state.id=action.payload.id
            // console.log("username")
        },
        logout:(state)=>{
            state.isLoggedIn=false;
            state.role=null;
            state.username= ''
            state.id= ''
            window.localStorage.clear()
        }
    }
})
export const {setUser,logout}=loginSlice.actions
const loginReducer = loginSlice.reducer;
export default loginReducer