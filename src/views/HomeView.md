<template>
    <Navbar/>
  
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards" :key="card.title" :cols="card.flex" class="pa-8" 
        >
          <v-card >
            
            <v-card-title class="text-red" v-text="card.title" ></v-card-title>
            

            <v-card-actions>

              <v-btn color="primary" elevation >More info</v-btn>
              <v-spacer></v-spacer>

              <v-btn size="small" color="surface-variant" variant="text" icon="mdi-heart"></v-btn>

              <v-btn size="small" color="surface-variant" variant="text" icon="mdi-bookmark"></v-btn>

              <v-btn size="small" color="surface-variant" variant="text" icon="mdi-share-variant"></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

</template>

<script>
import NavBar from '@/components/NavBar.vue';
  export default {
    components : [NavBar],
    data: () => ({
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
        
      ],
    }),
  }
</script>