<template>
  <div>
    <login-component v-if="showLogin" @login-success="handleLoginSuccess"></login-component>
    <div v-else>
     
   <NavBar></NavBar>
    <v-btn  @click="Delogged" class="mx-auto success">Se deconnecter2</v-btn>
    
    
    </div>
  </div>
 
</template>

<script>
import LoginComponent from './views/LoginView.vue';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    LoginComponent,
   NavBar
  },
  data() {
    return {
      showLogin: true,
   
    };
  },
   computed: {
    userEmail() {
      return this.$root.userEmail; // Accéder à la propriété "userEmail" du composant racine (App.vue)
    },
  },
  methods: {
    handleLoginSuccess(email) {
      this.showLogin = false; // Cacher le composant de connexion après une connexion réussie
      this.userEmail = email; // Stocker l'e-mail de l'utilisateur
      localStorage.setItem('authToken', 'xxx44');
      this.$router.push('/home');
      alert(this.authToken)
    },  
    Delogged(){
      this.showLogin = true
      localStorage.removeItem('authToken');

  this.$root.userEmail = null;
  this.$router.push('/login');
    }
  },
  created() {
  const authToken = localStorage.getItem('authToken');

  if (authToken) {
    this.showLogin = false;
    // Effectuer toute autre opération nécessaire, comme la vérification du jeton d'authentification côté serveur
  }
},

};
</script>
