<template>
    <aside class="bg-blue-100 w-30 md:w-60 min-h-screen p-6 shadow">
        <nav class="space-y-4">
            <RouterLink to="/" class="block hover:text-blue-600">Home</RouterLink>
            <RouterLink to="/about" class="block hover:text-blue-600">About</RouterLink>
            <RouterLink to="/contact" class="block hover:text-blue-600">Contact</RouterLink>
        </nav>
    </aside>
</template>

<script setup>
import { RouterLink } from "vue-router";</script>