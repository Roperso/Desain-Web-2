<template>
    <div class="min-h-screen flex flex-col">
        <Header></Header>
        <div class="flex flex-1">
            <Sidebar />
            <main class="flex-1 p-6 bg-blue-200 overflow-y-auto">
                <slot></slot>
            </main>
        </div>
    </div>
</template>

<script setup>
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
</script>