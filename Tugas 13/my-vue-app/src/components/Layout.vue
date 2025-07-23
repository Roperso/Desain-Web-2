<template>
    <div class="min-h-screen flex flex-col">
        <Header />
        <div class="flex flex-1">
            <Sidebar />
            <main class="flex-1 p-6 bg-blue-200 overflow-y-auto">
                <slot />
            </main>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Sidebar from './Sidebar.vue'
</script>