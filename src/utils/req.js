import axios from 'axios'
let setUserInfo = ()=>{
    $http.get('/userinfo')
        .then((resp)=>{
             console.log(resp)
        })
}
let getHomeDatas = ()=>{
    return axios.get('/home')
}
let getCartData = () =>{
    return axios.get('/cart')
}
let gertRemoveBox = ()=>{
    return axios.get('/categorygoods?mId=33')
}

let getCartPhone= () =>{
    return axios.get('/categorygoods?mId=34')
}

let getCartBackPack= () =>{
    return axios.get('/categorygoods?mId=32')
}

let getCartHoildayBox= () =>{
    return axios.get('/categorygoods?mId=31')
}

let getCartPlaneBox= () =>{
    return axios.get('/categorygoods?mId=30')
}

let getCartPushBox =() =>{
    return axios.get('/categorygoods?mId=29')
}

let getCartCandy = () =>{
    return axios.get('/categroygoods?mId=28')
}

let getCartBread = () =>{
   return axios.get('/categroygoods?mId=27')
}
export default {
    setUserInfo,
    getHomeDatas,
    getCartData,
    gertRemoveBox,
    getCartPhone,
    getCartBackPack,
    getCartHoildayBox,
    getCartPlaneBox,
    getCartPushBox,
    getCartCandy,
    getCartBread
}