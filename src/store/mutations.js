export default {
  ADD_DATA_LIST(state, payload) {
    state.storeData = payload;
  },
  ADD_USER_LIST(state, payload) {
    state.listUser = payload;
  },
  setUserLogin(state,payload){
    state.user = payload;
  }

}