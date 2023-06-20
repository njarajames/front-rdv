<template>
  <div>
    <!-- Formulaire de connexion -->
    <form @submit.prevent="login">
      <!-- Champ d'identification (nom d'utilisateur, e-mail, etc.) -->
      <input type="text" v-model="username" placeholder="Nom d'utilisateur" >
      <!-- Champ de mot de passe -->
      <input type="password" v-model="password" placeholder="Mot de passe">
      <!-- Bouton de connexion -->
      <button type="submit">Se connecter</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      // Effectuez la vérification de l'authentification avec les informations d'identification fournies
      const isAuthenticated = true // Vérifiez les informations d'identification (vous devez implémenter cette fonction)

      if (isAuthenticated) {
        this.$emit('login-success',this.username); // Émettre un événement pour notifier le composant racine que la connexion a réussi
      } else {
        // Gérer les erreurs d'authentification
      }
    },
  },
};
</script>
