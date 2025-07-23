<template>
    <div class="min-h-screen flex flex-col">
        <header class="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
            <h1 class="text-xl font-bold">User Manager</h1>

            <nav class="space-x-4">
                <router-link to="/" class="hover:underline">Home</router-link>
                <router-link to="/add" class="hover:underline">Tambah User</router-link>
            </nav>
        </header>

        
        <main class="flex-1 p-6 bg-gray-50">
            <div class="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
                <slot></slot>
            </div>
        </main>
    </div>
</template>

<script setup>
import Sidebar from './Sidebar.vue'
</script>