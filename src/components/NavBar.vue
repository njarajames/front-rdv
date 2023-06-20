<template>
    <v-app>
      
      
      <v-navigation-drawer v-model="drawer" app color="#f0f8ff">
        <h1 class="pa-8 ml-16">Projet</h1>
        <v-spacer></v-spacer>
        <v-list>
          <v-list-item-group >
            <v-list-item v-for="(item, index) in menuItems" :key="index" class="text-center">
              
                <v-btn class="mt-5" :ripple="true" rounded="xxl" width="100%" color="success" :to="item.route" >
                  
                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-btn>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar app color="#f0f8ff">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" ></v-app-bar-nav-icon>
        <v-responsive class="mx-auto" max-width="844">
        
          
          <v-btn @click="logout">Se deconnecter</v-btn>
        </v-responsive>
        
        
      </v-app-bar>
      
        <v-main>
          <router-view></router-view>
        </v-main>
        
      
          
    </v-app>
    
  </template>
  
  <style>
    .Ax{
      border-radius: 40%;
    }
    .searched{
      
      margin-left: 35ch;
    }
  </style>
  
  <script>
  export default {
    name: 'NavBar',
    data() {
      return {
        drawer: true,
      
        menuItems: [
          { title: 'Bouton 1', icon: 'mdi-check', route: '/home' },
          
          { title: 'Bouton 3', icon: 'mdi-settings', route: '/about' },
          
          
          { title: 'Bouton 4', icon: 'mdi-settings', route: '/table' },

          { title: 'Bouton 5', icon: 'mdi-settings', route: '/dashboard' },

        ],
      };
    },
    methods: {
      logout(){
        this.showLogin = true
      localStorage.removeItem('authToken')
      this.$root.userEmail = null;
      this.$router.push('/login');
      }
    },
  };
  </script>
  
  <style>
  .rounded-input .v-input__control .v-input__slot {
    border-radius: 20px;
    width: 40%;
  }
  </style>