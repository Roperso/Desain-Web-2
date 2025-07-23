<template>
  <Layout>
    <h2 class="text-2xl font-bold mb-4">Daftar Produk</h2>

    <div v-if="loading">Memuat produk...</div>
    <div v-else-if="error">Gagal memuat produk.</div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="product in products" :key="product.id" class="bg-white p-4 rounded-lg shadow hover:scale-105 transition relative">
            <router-link :to="`/products/${product.id}`">
            <img :src="product.image" alt="Product image" class="w-full h-48 object-contain mb-2" />
            <h3 class="font-semibold text-lg">{{ product.title }}</h3>
            <p class="text-sm text-gray-600 line-clamp-2">{{ product.description }}</p>
            <p class="text-blue-600 font-bold mt-2">$ {{ product.price }}</p>
            </router-link>
          <button class="absolute bg-blue-600 px-4 py-1 text-white hover:bg-blue-400 bottom-2 right-4 rounded cursor-pointer">Beli</button>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Layout from '../components/Layout.vue'

const products = ref([])
const loading = ref(true)
const error = ref(false)

onMounted(async () => {
  try {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    products.value = data
  } catch (e) {
    error.value = true
    console.error('Gagal fetch produk:', e)
  } finally {
    loading.value = false
  }
})
</script>
