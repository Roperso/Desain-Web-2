<template>
    <aside class="bg-blue-100 w-30 md:w-40 min-h-screen p-6 shadow">
        <nav class="space-y-4">
            <RouterLink to="/" class="block hover:text-blue-600">Home</RouterLink>
            <RouterLink to="/products" class="block hover:text-blue-600">Products</RouterLink>
            <RouterLink to="/about" class="block hover:text-blue-600">About</RouterLink>
        </nav>
    </aside>
</template>

<script setup>
import { RouterLink } from "vue-router";</script>