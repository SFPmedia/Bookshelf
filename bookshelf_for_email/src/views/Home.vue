<template>
  <div class="home">
    <h1>Login</h1>
    <div v-if="this.loggedIn == true">
      <p>Thank you for logging in!</p>
      <router-link to="/Main">To the library</router-link>
    </div>
    <div class="login-container">
      <div class="login-box">
        <p>Login here to access the library</p>
        <p>
          5 possible users, with associated passwords have been listed below,
          for testing purposes
        </p>
        <div v-for="user in users" :key="user.id" class="testUsers">
          Username: {{ user.email }} <br />
          Password: {{ user.password }}
        </div>

        <div class="login">
          <label for="email">E-mail </label>
          <input id="email" v-model="loginInfo.email" />
          <label for="password"><br />Password </label>
          <input id="password" v-model="loginInfo.password" type="password" />
          <br />
          <button @click="loginUser">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      loginInfo: {
        email: "",
        password: "",
      },
      users: [
        {
          id: 1,
          email: "User1",
          password: "one",
        },
        {
          id: 2,
          email: "User2",
          password: "two",
        },
        {
          id: 3,
          email: "User3",
          password: "three",
        },
        {
          id: 4,
          email: "User4",
          password: "four",
        },
        {
          id: 5,
          email: "User5",
          password: "five",
        },
      ],
      loggedIn: false,
    };
  },
  computed: {},
  methods: {
    loginUser() {
      let user = this.loginInfo;
      console.log(user.email + " + " + user.password);
      let i;
      for (i = 0; i < this.users.length; i++) {
        if (
          user.email == this.users[i].email &&
          user.password == this.users[i].password
        ) {
          console.log(
            "Access Granted " +
              this.users[i].email +
              " + " +
              this.users[i].password
          );
          this.loggedIn = true;
          console.log(this.loggedIn);
        } else {
          console.log("Access Denied");
          console.log(this.loggedIn);
        }
      }
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
.login-container {
  .login-box {
    margin: 1em;
    text-align: left;

    p {
      width: 40%;
    }

    .testUsers {
      width: 50%;
      margin-top: 1em;
    }

    .login {
      margin-left: auto;
      margin-right: auto;
      display: flex;
      flex-direction: column;
      width: 25%;
    }

    img {
      margin-top: 0.5em;
      margin-left: 7.5%;
      width: 85%;
    }
  }
}
</style>