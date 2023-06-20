<template>
    <v-app>
      <v-navigation-drawer v-model="drawer" app>
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
      <v-app-bar app>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-responsive class="mx-auto" max-width="544"></v-responsive>
        <v-text-field class="rounded-input mt-5" placeholder="Rechercher"  rounded variant="solo" ></v-text-field>
  
      </v-app-bar>
      <v-main>
        <router-view/>
      </v-main>
    </v-app>
  </template>
  
  <style>
    .Ax{
      border-radius: 40%;
    }
  </style>
  
  <script>
  export default {
    name: 'NavBar',
    data() {
      return {
        drawer: true,
      
        menuItems: [
          { title: 'Bouton 1', icon: 'mdi-check', route: '/' },
          { title: 'Bouton 2', icon: 'mdi-account', route: '' },
          { title: 'Bouton 3', icon: 'mdi-settings', route: '/about' },
          { title: 'Bouton 4', icon: 'mdi-help', route: '/calendrier' },
          { title: 'Bouton 5', icon: 'mdi-email', route: '' },
        ],
      };
    },
  };
  </script>
  
  <style>
  .rounded-input .v-input__control .v-input__slot {
    border-radius: 20px;
    width: 40%;
  }
  </style>