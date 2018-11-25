import * as types from './mutation_type.js'
const actions ={
    getCartData({commit},payload){
        commit(types.GETCARTDATA, payload)
    },
    getSelectedData({commit},payload){
        commit(types.GET_SELECTED_DATA, payload)
    },
    getRemoveBox({commit}, payload){
        commit(types.GET_REMOVE_BOX, payload)
    },
    getCartPhone({commit}, payload){
        commit(types.GET_CART_PHONE, payload)
    },
    getCartBackPack({commit}, payload){
        commit(types.GET_CART_BACKPACK, payload)
    },
    getCartHoildayBox({commit}, payload){
        commit(types.GET_CART_HOILDAY_BOX, payload)
    },
    getCartPlaneBox({commit}, payload){
        commit(types.Get_CART_PLANE_BOX, payload)
    },
    getCartPushBox({commit}, payload){
        commit(types.GET_CART_PUSH_BOX, payload)
    },
    getCartCandy({commit}, payload){
        commit(types.GET_CART_CANDY, payload)
    },
    getCartBread({commit},payload){
        commit(types.GET_CART_BREAD, payload)
    }
}
const mutations = {
    [types.GETCARTDATA]:(state,payload)=>{
        state.carts = payload
    },
    [types.GET_SELECTED_DATA]: (state, payload)=>{
     state.cartList = [];
     state.cartList = payload;
   },
    [types.GET_REMOVE_BOX]: (state, payload)=>{
        state.cartsByRemoveBox = payload
    },
    [types.GET_CART_PHONE]: (state, payload)=>{
        state.cartsByPhone = payload
    },
    [types.GET_CART_BACKPACK]: (state, payload)=>{
        state.cartsByBackPack = payload
    },
    [types.GET_CART_HOILDAY_BOX]: (state, payload)=>{
        state.cartsByHoildayBox = payload
    },
    [types.Get_CART_PLANE_BOX]: (state, payload)=>{
        state.cartByPlaneBox = payload
    },
    [types.GET_CART_PUSH_BOX]: (state, payload)=>{
        state.cartsByPushBox = payload
    },
    [types.GET_CART_CANDY]: (state, payload) =>{
        state.cartsByCandy = payload
    },
    [types.GET_CART_BREAD]: (state, payload) =>{
        state.cartsByBread = payload
    }
}
const state={
    carts:[],
    cartList:[],
    cartsByRemoveBox:[],
    cartsByPhone: [],
    cartsByBackPack: [],
    cartsByHoildayBox: [],
    cartByPlaneBox:[],
    cartsByPushBox: [],
    cartsByCandy: [],
    cartsByBread: []
}

export  default {
    actions,
    mutations,
    state
}