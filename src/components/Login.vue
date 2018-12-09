<template>
  <div>
    <div class="login-wrap" v-show="showLogin">
      <h3>Login</h3>
      <p v-show="showTishi">{{tishi}}</p>
      <input type="text" placeholder="please enter user name" v-model="username">
      <input type="password" placeholder="Please enter your password" v-model="password">
      <button v-on:click="login">Login</button>
      <span v-on:click="ToRegister">No account? Register now</span>
    </div>

    <div class="register-wrap" v-show="showRegister">
      <h3>Register</h3>
      <p v-show="showTishi">{{tishi}}</p>
      <input type="text" placeholder="please enter user name" v-model="newUsername">
      <input type="password" placeholder="Please enter your password" v-model="newPassword">
      <button v-on:click="register">Register</button>
      <span v-on:click="ToLogin">No account? Register now</span>
    </div>
  </div>
</template>
<script>
export default{
  data () {
    return {
      showLogin: true,
      showRegister: false,
      showTishi: false,
      tishi: '',
      username: '',
      password: '',
      newUsername: '',
      newPassword: ''
    }
  }
}
</script>
<style>
  .login-wrap{text-align:center;}
  input{display:block; width:250px; height:40px; line-height:40px; margin:0 auto; margin-bottom: 10px; outline:none; border:1px solid #888; padding:10px; box-sizing:border-box;}
  p{color:red;}
  button{display:block; width:250px; height:40px; line-height: 40px; margin:0 auto; border:none; background-color:#41b883; color:#fff; font-size:16px; margin-bottom:5px;}
  span{cursor:pointer;}
  span:hover{color:#41b883;}
</style>
