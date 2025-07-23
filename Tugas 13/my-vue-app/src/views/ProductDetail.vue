<template>
  <Layout>
    <div v-if="loading">Memuat detail produk...</div>
    <div v-else-if="error">Gagal memuat data produk.</div>
    <div v-else class="flex flex-col md:flex-row gap-6 bg-white p-6 rounded shadow">
      <img :src="product.image" :alt="product.title" class="w-full md:w-1/3 object-contain max-h-96" />

      <div class="flex-1 space-x-2">
        <h1 class="text-2xl font-bold mb-2">{{ product.title }}</h1>
        <p class="text-gray-600 mb-4">{{ product.description }}</p>
        <p class="text-lg text-blue-600 font-semibold mb-2">$ {{ product.price }}</p>
        <p class="text-sm text-gray-500">Kategori: {{ product.category }}</p>

        <button class="border border-blue-600 mt-4 bg-white-600 text-blue px-4 py-2 rounded hover:bg-blue-300 cursor-pointer">
          Tambahkan ke Keranjang</button>
        <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-300 cursor-pointer">Beli</button>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Layout from '../components/Layout.vue'

const route = useRoute()
const product = ref({})
const loading = ref(true)
const error = ref(false)

onMounted(async () => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${route.params.id}`)
    if (!res.ok) throw new Error('Gagal fetch')
    product.value = await res.json()
  } catch (e) {
    console.error('Gagal fetch detail produk:', e)
    error.value = true
  } finally {
    loading.value = false
  }
})
</script>
