let getTimeStamp=(date) =>{
    let year = date.getFullYear();
    let month =  date.getMonth() >= 10 ? (date.getMonth()+1) : '0' + (date.getMonth()+1)
    let day = date.getDay() >= 10 ? date.getDay() : '0' + date.getDay()
    let hours = date.getHours() >= 10 ? date.getHours() : '0' + date.getHours()
    let minutes = date.getMinutes()>=10 ? date.getMinutes() : '0' + date.getMinutes()
    let secound = date.getSeconds()>=10 ? date.getSeconds() : '0' + date.getSeconds()
    return year +'-'+month+'-'+day +' '+ hours +':'+minutes+':'+secound
}

export default {
    getTimeStamp
}