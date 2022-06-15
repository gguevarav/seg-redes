<template>
  <div class="navbar-menu">
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <div v-if="account">{{ account.name }} |</div>
          <a
            v-if="!account"
            @click="SignIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            IniciarSesion
            <i class="fas fa-sign-in-alt fa-2x" aria-hidden="false"></i>
          </a>
          <a v-else @click="SignOut" target="_blank" rel="noopener noreferrer">
            | Cerrar Sesión
            <i class="fas fa-sign-out-alt fa-2x" aria-hidden="false"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PublicClientApplication } from "@azure/msal-browser";

export default {
  name: "HeaderBar",
  data() {
    return {
      account: undefined,
    };
  },
  async created() {
    this.$msalInstance = new PublicClientApplication(
      this.$store.state.msalConfig
    );
  },
  mounted() {
    const accounts = this.$msalInstance.getAllAccounts();
    if (accounts.length == 0) {
      return;
    }
    this.account = accounts[0];
    this.$emitter.emit("login", this.account);
  },
  methods: {
    async SignIn() {
      await this.$msalInstance
        .loginPopup({})
        .then(() => {
          const myAccounts = this.$msalInstance.getAllAccounts();
          this.account = myAccounts[0];
          this.$emitter.emit("login", this.account);
        })
        .catch((error) => {
          console.error(`error during authentication: ${error}`);
        });
    },
    async SignOut() {
      await this.$msalInstance
        .logout({})
        .then(() => {
          this.$emitter.emit("logout", "logging out");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
