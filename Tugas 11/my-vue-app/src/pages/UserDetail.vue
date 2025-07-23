<template>
    <div class="p-4 bg-blue-100 h-screen flex items-center justify-center">
        <div v-if="user" class="p-8 bg-blue-200 rounded-xl flex flex-col items-center gap-8">
            <img :src="user.image" class="w-24 h-24 rounded-full" alt="Avatar" />
            <div>
                <p class="font-semibold mb-4">Fullname: {{ user.firstName }} {{ user.lastName }}</p>
                <p class="text-sm text-gray-500">Email: {{ user.email }}</p>
                <p class="text-sm text-gray-500">Username: {{ user.username }}</p>
                <p class="text-sm text-gray-500">Phone: {{ user.phone }}</p>
                <p class="text-sm text-gray-500">Age: {{ user.age }}</p>
                <p class="text-sm text-gray-500">Address: {{ user.address?.address }}, {{ user.address?.city }}, {{ user.address?.state }}</p>
                <p class="text-sm text-gray-500">Company: {{ user.company?.name }}</p>
            </div>
            <router-link to="/" class="text-white bg-blue-500 hover:bg-blue-400 py-1 px-3 rounded-lg text-sm inline-block cursor-pointer ms-auto">
                Back </router-link>
        </div>
        <p v-else>Loading...</p>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const user = ref(null)

const fetchUser = async (id) => {
    try {
        const response = await axios.get(`https://dummyjson.com/users/${id}`)
        user.value = response.data
        console.log('User fetched:', user.value)
    } catch (error) {
        console.error('Gagal fetch user:', error)
        user.value = null
    }
}

onMounted(() => {
    console.log('Mounted UserDetail with ID:', route.params.id)
    fetchUser(route.params.id)
})

</script>
