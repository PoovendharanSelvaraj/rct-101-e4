// Note: Do not update/change the initial state

import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT } from "./auth.types";






export const authInitalState = {
  loading: false,
  data: {
    token: "",
    isAuthenticated: false,
  },
  error: false,
};
let token=localStorage.getItem("token");
export const authReducer = (state = authInitalState,{type,playload}) => {
   switch (type){
    case AUTH_SIGN_IN_LOADING:
      return {
        ...state,
        loading:true,
        error:false,
        data:{
          ...state.data,
          isAuthenticated:false,
        }
      }
    case AUTH_SIGN_IN_SUCCESS:
      return {
        ...state,
        loading:false,
        error:false,
        data:{
          ...state.data,
          isAuthenticated:true,
          token:token,
        }

      }
    case AUTH_SIGN_IN_ERROR:
      return {
        ...state, loading: false, error: true,  
      }    
    case AUTH_SIGN_OUT:
      localStorage.removeItem("token")
      return{
        ...state,     data:{
          ...state.data,
          isAuthenticated:false,
          token:"",
        },
  
      }  
    default:
      return state;
   }
};
