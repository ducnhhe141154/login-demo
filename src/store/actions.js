import axios from "axios";
export default {
    handle_GetData : async({commit},payload) =>{
       try {
       const data = await axios.get(`https://jsonplaceholder.typicode.com/${payload}`);
        commit('ADD_DATA_LIST',data.data);
       } catch (error) {
           console.log(error);
       }
       
    },
    handle_GetUser : async({commit},payload) =>{
        try {
        const data = await axios.get(`http://localhost:3000/${payload}`);
         commit('ADD_USER_LIST',data.data);
        } catch (error) {
            console.log(error);
        }
        
     },
}