<template>
  <Layout>
    <h2 class="text-2xl font-semibold mb-5">Selamat Datang!</h2>
    <p class="text-gray-700 mb-4">
      Berikut adalah pengguna platform Layout App
    </p>

    <div v-if="loading" class="text-blue-500">Memuat data...</div>
    <div v-else-if="error" class="text-red-500">Terjadi kesalahan: {{ error }}</div>

    <div v-else>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div
          v-for="user in data"
          :key="user.id"
          class="bg-white shadow-md rounded-lg p-4 border hover:scale-104 transition cursor-pointer">
          <img :src="user.image" alt="User image" class="w-20 h-20 rounded-full mx-auto p-3 mb-2" />
          <h4 class="text-lg font-semibold mb-1">{{ user.firstName }} {{ user.lastName }}</h4>
          <p class="text-gray-600 text-[10px] mb-1">Email: {{ user.email }}</p>
          <p class="text-gray-500 text-[10px]">Username: {{ user.username }}</p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Layout from '../components/Layout.vue'

const data = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const response = await axios.get('https://dummyjson.com/users')
    data.value = response.data.users
  } catch (err) {
    error.value = err.message || 'Gagal mengambil data.'
  } finally {
    loading.value = false
  }
})
</script>
