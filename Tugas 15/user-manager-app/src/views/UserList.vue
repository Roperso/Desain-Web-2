<template>
  <Layout>
    <h2 class="text-center text-2xl font-semibold mb-4">Daftar User</h2>
      <RouterLink to="/add" class="text-center border bg-blue-600 text-white  hover:bg-blue-400 px-4 py-2 rounded hover:text-white transition">Tambah User</RouterLink>
    <div v-if="loading" class="text-center text-gray-500 py-4">Memuat data pengguna</div>
    <table class="w-full table-auto border border-collapse mt-4">
      <thead class="bg-gray-200">
        <tr>
          <th class="border px-4 py-2">Avatar</th>
          <th class="border px-4 py-2">Nama</th>
          <th class="border px-4 py-2">Email</th>
          <th class="border px-4 py-2">Aksi</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in users" :key="user.id" class="hover:bg-gray-50 transition">
          <td class="border px-2 py-2 border text-center space-x-2">
            <img :src="user.avatar" alt="avatar" class="w-12 h-12 rounded-full" />
          </td>
          
          <td class="border px-4 py-2 border text-center">{{ user.name }}</td>
          <td class="border px-4 py-2 text-center">{{ user.email }}</td>
          <td class="border px-4 py-2">
            <button @click="editUser(user.id)" class="text-blue-600 cursor-pointer text-center px-5">Edit</button>
            <button @click="deleteUser(user.id)" class="text-red-600 cursor-pointer text-center">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </Layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Layout from '../components/Layout.vue'
import { useRouter } from 'vue-router'
//import { use } from 'react'

const users = ref([])
const loading = ref(true)
const router = useRouter()

const editUser = (id) => {
  router.push (`/edit/${id}`)
}

const deleteUser = async (id) => {
  if (confirm('Yakin ingin memghapus user ini?')) {
    await fetch(`https://6864ebe85b5d8d03397ed8a0.mockapi.io/users/${id}`, {
      method: 'DELETE'
    })
    users.value = users.value.filter(u => u.id !== id)
  }
}

onMounted(async () => {
  const res = await fetch(`https://6864ebe85b5d8d03397ed8a0.mockapi.io/users`)
  users.value = await res.json()
  loading.value = false
})
</script>
