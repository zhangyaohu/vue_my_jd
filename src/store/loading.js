
const actions = {
    showLoading({commit}){
     commit('SHOWLOADING')
    },
    hideLoading({commit}){
        commit("HIDELOADING")
    }
}

const mutations = {
    SHOWLOADING:(state)=>{
       state.isShow = true
    },
    HIDELOADING:(state)=>{
        state.isShow = false
    }
}

const state={
    isShow: false,
}

export default {
    actions,
    mutations,
    state
}