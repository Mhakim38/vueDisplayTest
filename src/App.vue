<script setup>
import { ref } from 'vue'

const datas = ref([
  { id: 1, asset: 'Printer', department: 'HR' },
  { id: 2, asset: 'Monitor', department: 'IT' },
  { id: 3, asset: 'Barcode Scanner', department: 'ACCOUNT' },
])

function downloadCSV() {
  // Convert data to CSV
  const header = ['ID,Asset Name,Department']
  const rows = datas.value.map(d => `${d.id},${d.asset},${d.department}`)
  const csvContent = [header, ...rows].join('\n')

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)

  // Set temp link to download CSV
  const link = document.createElement('a')
  link.setAttribute('href', url)
  link.setAttribute('download', 'AssetData.csv')
  document.body.appendChild(link)

  // download trigger
  link.click()
  document.body.removeChild(link)
}
</script>

<template>
  <div class="container">
    <h1>Asset Data Table (VueJS)</h1>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      
      <tbody>
        <tr v-for="data in datas" :key="data.id">
          <td>{{ data.id }}</td>
          <td>{{ data.asset }}</td>
          <td>{{ data.department }}</td>
        </tr>
      </tbody>
    </table>

    <button @click="downloadCSV">Download CSV</button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th {
  border: 1px solid #ccc;
  padding: 8px;
  color: black;
}

td {
  padding: 10px;
  border: solid 1px #ddd;
}
thead {
  background-color: #f4f4f4;
}
button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: white;
  color: black;
}
</style>
