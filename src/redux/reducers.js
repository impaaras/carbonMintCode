export const initialState = {
    value: 0,
    user: null,
    userType: null,
    userData: null,
    
}
export const reducers = {
    increment: (state) => {
      state.value += 1;
    },
    setUser: (state, action)=>{
      state.user = action.payload
    },
    setUserData: (state, action)=>{
      state.userData = action.payload
    }

}