<template>
    <div class="p-4 flex justify-center h-screen bg-blue-100 pt-24">
        <div class="w-[400px] flex flex-col gap-4">
            <h2 class="text-2xl text-blue-600 text-center font-bold my-8">Add New User</h2>
            <div class="w-full flex flex-col gap-2">
                <label for="firstName">First Name</label>
                <input v-model="firstName" type="text" placeholder="First Name" class="border p-2 rounded w-full" />
            </div>
            <div class="w-full flex flex-col gap-2">
                <label for="lastName">Last Name</label>
                <input v-model="lastName" type="text" placeholder="Last Name" class="border p-2 rounded w-full" />
            </div>
            <div class="w-full flex flex-col gap-2">
                <label for="email">Email</label>
                <input v-model="email" type="email" placeholder="Email" class="border p-2 rounded w-full" />
            </div>

            <div class="flex mt-4 gap-4">
                <button @click="createUser"
                    class="bg-blue-500 text-white py-2 px-4 w-full rounded hover:bg-blue-700 cursor-pointer">Add</button>
                <router-link to="/users"
                    class="text-white text-center bg-red-500 hover:bg-red-700 py-2 px-5 rounded text-sm inline-block cursor-pointer w-full">
                    Back to User List
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'


const firstName = ref('')
const lastName = ref('')
const email = ref('')

const createUser = async () => {
    try {
        const response = await axios.post('https://dummyjson.com/users/add', {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value
        })
        alert("User created successfully! ID: " + response.data.id)
    } catch (error) {
        console.error('Error creating user:', error)
    }
}
</script>
