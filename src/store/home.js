import * as types from './mutation_type.js'
const state={
    userInfo:{},
    homeData:[]
}
const actions = {
    setUserInfo:({commit, userInfo})=>{
        commit(types.SETUSERINFO, userInfo)
    },
    getHomeDatas:({commit}, homeData)=>{
        console.log(homeData.data)
        debugger
        commit(types.GETHOMEDATAS, homeData.data)
    }
}
const getters ={
    getHomeData:(state)=>{
      state.homeData =  homeData
    }
}
const mutations={
    [types.GETHOMEDATAS]:(state, homeData)=>{
             console.log(homeData)
            state.homeData =  homeData
        },
    [types.SETUSERINFO]:(state, homeData)=>{
            state.userInfo = homeData
        }
}


export default{
    state,
    mutations,
    actions,
    getters
}