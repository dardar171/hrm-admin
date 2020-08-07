import axios from 'axios'

const state={
    accessToken:null
}
const mutations={
    storeAccessToken(state,token){
        state.accessToken=token;
    },
    removeAccessToken(state){
        state.accessToken=null;
    }
}
const actions={
    async login({commit},data){
        var formData=new FormData();
        formData.append('grant_type','password');
        formData.append('client_id','2');
        formData.append('client_secret','WRScrfXN3g24H47cfs6Ck6xtL98D9u3zVS0737Oo');
        formData.append('username',data.email);
        formData.append('password',data.password);
        formData.append('scope','');
        const res=await axios.post("/oauth/token",formData,{headers:{'Content-Type':'multipart/form-data'}});
        console.log(res.data);
        commit('storeAccessToken',res.data.access_token)
    },
    async logout({commit}){
        commit('removeAccessToken');
    }
   
}
const getters={
   accessToken(state){
       return state.accessToken;
   }
}
export default{
    state,
    mutations,
    actions,
    getters
}