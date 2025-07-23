<template>
    <div class="p-4 bg-blue-100 flex flex-col items-center min-h-screen">
        <div class="flex justify-between items-center mt-24 mb-8 w-full max-w-4xl">
            <h1 class="text-2xl font-bold text-blue-600">All User</h1>
            <router-link to="/create"
                class="text-white text-center bg-blue-500 hover:bg-blue-400 py-2 px-5 rounded-lg text-sm font-bold inline-block cursor-pointer">
                Add
            </router-link>
        </div>
        <div v-if="loading" class="text-blue-600">Loading...</div>
        <ul v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-fit gap-4 mx-auto">
            <li v-for="user in users" :key="user.id"
                class="flex flex-col items-center gap-8 p-6 shadow-lg rounded-lg w-full bg-blue-200/20 border border-bluen-300">
                <img :src="user.image" class="w-12 h-12 rounded-full" alt="Avatar" />
                <div>
                    <p class="font-semibold">{{ user.firstName }} {{ user.lastName }}</p>
                    <p class="text-sm text-gray-500">{{ user.email }}</p>
                </div>
                <router-link :to="`/users/${user.id}`"
                    class="text-white text-center bg-blue-500 hover:bg-blue-400 py-1 px-3 rounded-lg text-sm inline-block cursor-pointer w-full">
                    Detail
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const users = ref([]);
const loading = ref(true);
const status = ref('');

onMounted(async () => {
    try {
        const response = await axios.get('https://dummyjson.com/users');
        users.value = response.data.users;
    } catch (error) {
        console.error('Error fetching users:', error);
        status.value = 'Gagal memuat data pengguna.';
    } finally {
        loading.value = false;
    }
});

</script>