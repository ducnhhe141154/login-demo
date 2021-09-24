import  VuexPersistence  from 'vuex-persist'
    const  plugins = [new VuexPersistence({storeConfigs: window.sessionStorage}).plugin]
export default plugins