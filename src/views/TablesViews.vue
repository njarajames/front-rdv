<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th @click="sortTable('name')">Nom</th>
          <th @click="sortTable('age')">Âge</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in paginatedItems" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.email }}</td>
          <td>
            <v-btn @click="editItem(item)">Modifier</v-btn>
            <v-btn @click="deleteItem(item.id)">Supprimer</v-btn>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <v-btn :disabled="currentPage === 1" @click="prevPage">Précédent</v-btn>
      <span>{{ currentPage }}</span>
      <v-btn :disabled="currentPage === totalPages" @click="nextPage">Suivant</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'John Doe', age: 25, email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', age: 30, email: 'jane@example.com' },
        { id: 3, name: 'Terry Smith', age: 30, email: 'jane@example.com' },
        { id: 4, name: 'James Smith', age: 30, email: 'jane@example.com' },
        { id: 5, name: 'Bob Smith', age: 30, email: 'jane@example.com' },
        { id: 7, name: 'John Doe', age: 25, email: 'john@example.com' },
        { id: 8, name: 'Jane Smith', age: 30, email: 'jane@example.com' },
        { id: 9, name: 'Terry Smith', age: 30, email: 'jane@example.com' },
        { id: 10, name: 'James Smith', age: 30, email: 'jane@example.com' },
        { id:11, name: 'Bob Smith', age: 30, email: 'jane@example.com' },
        { id: 12, name: 'John Doe', age: 25, email: 'john@example.com' },
        { id: 13, name: 'Jane Smith', age: 30, email: 'jane@example.com' },
        { id: 14, name: 'Terry Smith', age: 30, email: 'jane@example.com' },
        { id: 15, name: 'James Smith', age: 30, email: 'jane@example.com' },
        { id: 16, name: 'Bob Smith', age: 30, email: 'jane@example.com' },
        { id: 17, name: 'John Doe', age: 25, email: 'john@example.com' },
        { id: 18, name: 'Jane Smith', age: 30, email: 'jane@example.com' },
        { id: 19, name: 'Terry Smith', age: 30, email: 'jane@example.com' },
        { id: 20, name: 'James Smith', age: 30, email: 'jane@example.com' },
        { id: 21, name: 'Bob Smith', age: 30, email: 'jane@example.com' },
        // Ajoutez d'autres objets ici
      ],
      sortKey: '', // Clé de tri
      sortDirection: 'asc', // Direction de tri (ascendant ou descendant)
      pageSize: 10, // Nombre d'éléments par page
      currentPage: 1, // Page courante
    };
  },
  computed: {
    sortedItems() {
      const key = this.sortKey;
      const direction = this.sortDirection === 'asc' ? 1 : -1;
      return this.items.slice().sort((a, b) => {
        if (a[key] < b[key]) return -direction;
        if (a[key] > b[key]) return direction;
        return 0;
      });
    },
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      return this.sortedItems.slice(startIndex, startIndex + this.pageSize);
    },
    totalPages() {
      return Math.ceil(this.sortedItems.length / this.pageSize);
    },
  },
  methods: {
    sortTable(key) {
      if (this.sortKey === key) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortKey = key;
        this.sortDirection = 'asc';
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    editItem(item) {
      // Logique de modification de l'élément
      console.log('Modifier', item);
    },
    deleteItem(itemId) {
      // Logique de suppression de l'élément
      console.log('Supprimer', itemId);
    },
  },
};
</script>
