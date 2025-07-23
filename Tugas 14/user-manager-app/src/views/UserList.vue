<template>
  <Layout>
    <h2 class="text-center text-2xl font-semibold mb-4">Daftar User</h2>
      <RouterLink to="/add" class="text-center border bg-blue-600 text-white  hover:bg-blue-400 px-4 py-2 rounded hover:text-white transition">Tambah User</RouterLink>
    <div v-if="loading" class="text-gray-500">Loading...</div>
    <table class="w-full table-auto border border-collapse mt-4">
      <thead class="bg-gray-200">
        <tr>
          <th class="border px-4 py-2">Avatar</th>
          <th class="border px-4 py-2">Nama</th>
          <th class="border px-4 py-2">Email</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in users" :key="user.id">
          
          <td class="border px-4 py-2">
            <img :src="user.avatar" alt="avatar" class="w-12 h-12 rounded-full" />
          </td>
          <td class="border px-4 py-2">{{ user.name }}</td>
          <td class="border px-4 py-2">{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </Layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Layout from '../components/Layout.vue'

const users = ref([])
const loading = ref(true)

onMounted(async () => {
  const res = await fetch('https://6880e494f1dcae717b63ddf0.mockapi.io/users')
  users.value = await res.json()
  loading.value = false
})
</script>
