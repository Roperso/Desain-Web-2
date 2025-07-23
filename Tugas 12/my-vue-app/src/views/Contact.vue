<template>
  <Layout>
    <h2 class="text-2xl font-semibold mb-4">Hubungi Kami</h2>
    <p class="text-gray-700 mb-6">
      Jika Anda memiliki pertanyaan, saran, atau ingin bekerja sama, silakan hubungi kami melalui form di bawah ini.
    </p>

    <form @submit.prevent="submitForm" class="space-y-4 max-w-lg">
      <div>
        <label class="block text-sm font-medium mb-1">Nama</label>
        <input type="text" v-model="form.name" class="w-full bg-white border rounded p-2" required />
      </div>
      <div>
        <label class="block text-sm font-medium mb-1">Email</label>
        <input type="email" v-model="form.email" class="w-full bg-white border rounded p-2" required />
      </div>
      <div>
        <label class="block text-sm font-medium mb-1">Pesan</label>
        <textarea v-model="form.message" class="w-full bg-white border rounded p-2" rows="4" required></textarea>
      </div>
      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer">
        Kirim
      </button>
    </form>

    <div v-if="submitted" class="text-green-600 mt-4">Pesan anda telah dikirim!</div>
  </Layout>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Layout from '../components/Layout.vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const submitted = ref(false)

function submitForm() {
  console.log('Form dikirim:', form)
  submitted.value = true

  form.name = ''
  form.email = ''
  form.message = ''
}
</script>
