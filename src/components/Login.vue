<template>
  <div class="main">
    <span v-if="isFail" class="fail">Wrong Username or Password !!!</span><br />
    <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
  </p>
    <span>Username: </span>
    <input type="text" v-model="user" placeholder="Username"  /><br /><br />
    <span>Password: </span>
    <input type="password" v-model="psw" placeholder="Password" /> <br /><br />
    <button @click="checkLogin()">Submit</button>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      user: "",
      psw: "",
      errors:[],
      isFail: false,
    };
  },
  created() {
    this.$store.dispatch("handle_GetUser", "user");
  },
  methods: {
    checkLogin() {
      this.errors = [];
      if (!this.user) {
        this.errors.push('Username required.');
      }
      if (!this.psw || this.psw.length < 2) {
        this.errors.push('Password length must > 2.');
      }
      else{
        this.errors.length = 0;
      }
      var data = this.$store.state.listUser;
      data.forEach((e) => {
        if (this.user === e.username && this.psw === "123") {
           this.setUserLogin(e);
          this.$router.push(`/home/${e.id}`);
          return;
        }
      });
      this.isFail = true;
    },
    ...mapMutations(['setUserLogin'])
  },
};
</script>
<style scoped>
button {
  padding: 2px 15px;
  background-color: #41b883;
  color: white;
  cursor: pointer;
}
button:hover {
  background-color: white;
  color: black;
}
.fail {
  color: red;
}
</style>