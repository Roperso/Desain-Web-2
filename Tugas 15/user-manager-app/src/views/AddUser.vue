<template>
  <Layout>
    <h2 class="text-2xl font-semibold mb-4">Tambah User</h2>

    <form @submit.prevent="submitUser" class="space-y-4 max-w-md mx-auto">
      <div>
        <label class="block mb-1 font_medium">Nama:</label>
        <input v-model="form.name" type="text" class="border p-2 rounded w-full" required />
      </div>

      <div>
        <label class="block mb-1 font_medium">Email:</label>
        <input v-model="form.email" type="email" class="border p-2 rounded w-full" required />
      </div>

      <div>
        <label class="block mb-1 font_medium">Avatar (URL):</label>
        <input v-model="form.avatar" type="text" class="border p-2 rounded w-full" />
      </div>

      <button type="submit" class="bg-blue-600 text-white hover:bg-blue-400 px-4 py-2 rounded cursor-pointer transition">
        Simpan
      </button>
    </form>
  </Layout>
</template>

<script setup>
import { ref } from 'vue'
import Layout from '../components/Layout.vue'
import { useRouter } from 'vue-router'

const form = ref({
  name: '',
  email: '',
  avatar: '',
})

const router = useRouter()

const submitUser = async () => {
  await fetch(`https://6864ebe85b5d8d03397ed8a0.mockapi.io/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form.value)
  })

  router.push('/')
}
</script>
