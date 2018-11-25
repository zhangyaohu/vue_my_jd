<template>
    <div class="login">
        <div class="login-container">
            <div class="login-body">
              <div class="login-row">
                <input type="text" class="name" v-model="userName" placeholder="请输入用户名"/>
                <img src="../assert/images/user.png"/>
              </div>
              <div class="login-row">
               <input type="password" v-model="password" placeholder="请输入密码"/>
                  <img src="../assert/images/password.png"/>
              </div>
              <div class="login-button">登录</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                userName:"",
                password:""
            }
        }
    }
</script>

<style scoped>
   .login-container{
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%,-50%);
     width: 80%;
     height:16.5rem;
     box-shadow: -0.1rem 0.1rem 0.1rem 0.1rem #cccccc, .1rem -0.1rem 0.1rem #ccc;
     background: #fff;
   }
    .login{
      position: relative;
      width: 100%;
      height: 100%;
    }
    .login-row{
        width: 80%;
        top:50%;
        margin: 1rem auto 1.5rem auto;
        border-bottom: 1px solid #ccc;
        height: 2.5rem;
    }
    .login-body{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 80%;
        height: 60%;
    }
   .login-body input{
       border: none !important;
       width: 100%;
       height: 100%;
       outline:none;
       margin-left: 2.45rem;
   }
    .login-button{
        width: 60%;
        margin: 1.5rem auto 0 auto;
        line-height: 2.5rem;
        height: 2.5rem;
        text-align: center;
        background: #336699;
        color: #fff;
    }
    .login-row img{
        position: relative;
        width: 2.5rem;
        height: 2.5rem;
        top: -3rem;
    }
   input::-webkit-input-placeholder{
        padding-left: 3rem;
    }
</style>