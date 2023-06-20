<template>
  
  
<v-container fluid>
    <v-row dense>
      <v-col
        v-for="card in cards" :key="card.title" :cols="card.flex" class="pa-8" 
      >
        <v-card >
          
          <v-card-title class="text-red" v-text="card.title" ></v-card-title>
          
          <p v-text="card.description" class="center"></p>

          <v-card-actions>

            <v-btn color="primary" elevation >More info</v-btn>
            <v-spacer></v-spacer>

            <v-btn size="small" color="surface-variant" variant="text" icon="mdi-facebook"></v-btn>

            <v-btn size="small" color="surface-variant" variant="text" icon="mdi-bookmark"></v-btn>

            <v-btn size="small" color="surface-variant" variant="text" icon="mdi-share-variant"></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  
 

</template>

<script>


export default {

  data: () => ({
    a : 'bonjour',
    cards: [
      { title: 'Pre-fab homes', description : 'LOREUM ', flex: 4 },
      { title: 'Favorite road trips', description : 'ipsum ', flex: 4 },
      { title: 'Best airlines', description : 'MANGAKA ', flex: 4 },
      { title: 'Best airlines', description : 'MANGAKA ', flex: 4 },
      { title: 'Best airlines', description : 'MANGAKA ', flex: 4 },
      { title: 'Best airlines', description : 'MANGAKA ', flex: 4 },
      { title: 'Best airlines', description : 'MANGAKA ', flex: 4 },
      { title: 'Best airlines', description : 'MANGAKA ', flex: 4 },
      { title: 'Best airlines', description : 'MANGAKA ', flex: 4 },
      
      
    ],
  }),
}
</script>

