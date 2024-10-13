<template>
    <div class="bg-gray-100 flex items-center justify-center min-h-screen">
        <div class="bg-white rounded-lg shadow-lg p-8 w-96">
            <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
            <form>
                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" required v-model="email"
                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 p-2">
                </div>
                <div class="mb-6">
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" id="password" name="password" required v-model="password"
                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 p-2">
                </div>
                <button type="submit" @click="onSubmit"
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md">
                    Log In
                </button>
            </form>
            <p class="mt-4 text-center text-sm text-gray-600">
                Don't have an account? <a href="#" class="text-blue-600 hover:underline">Sign up</a>
            </p>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useCounterStore } from '../stores/counter.ts';
const email = ref('');
const password = ref('');

const onSubmit = () => {
    console.log("--=-1-=Email ", email)
    console.log("--=-2-=password ", password)
}

const store = useCounterStore();
const { count } = storeToRefs(store);
const { increment } = store;
</script>