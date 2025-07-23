<template>
    <div class="min-h-screen flex flex-col">
        <header class="bg-blue-600 text-white px-6 py-4">
            <h1 class="text-xl font-bold">User Manager</h1>
        </header>
        <div class="flex flex-1">
            <Sidebar/>
            <main class="flex-1 p-6 bg-gray-50">
                <slot></slot>
            </main>
        </div>
    </div>
</template>

<script setup>
import Sidebar from './Sidebar.vue'
</script>