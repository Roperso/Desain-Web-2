<template>
    <nav class="bg-blue-200 shadow-md fixed w-full z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <router-link to="/" class="text-xl font-bold text-blue-600">User List Management</router-link>
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-10 flex space-x-4">
                            <router-link to="/"
                                class="text-blue-600 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Home</router-link>
                            <router-link to="/users"
                                class="text-blue-600 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Users</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>