<template>
    <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
        <h1 class="text-2xl font-bold mb-6 text-center">Login</h1>
        <FormKit type="form" @submit="onSubmit">
            <FormKit type="email" name="email" label="Email" placeholder="Enter your email" />
            <FormKit type="password" name="password" label="Password" placeholder="Enter your password" />
        </FormKit>
        <div>{{ tags }}</div>
    </div>
</template>

<script setup lang="ts">
import { FormKitNode } from '@formkit/core';
import { z } from 'zod';
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient.ts'
import { TagsTInterface } from '../stores/types/tags.ts'

const tags = ref<TagsTInterface[] | null>([])

async function getTags() {
    const { data } = await supabase.from('tags').select()
    tags.value = data
}

onMounted(() => {
    getTags()
});
const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email format" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

const onSubmit = (node: FormKitNode) => {
    const result = loginSchema.safeParse(node.value);
    console.log('Login successful', node.value, result);
    if (result.success) {
        // Handle successful submission
    } else {
        node.setErrors(
            result.error.flatten().fieldErrors
        )
    }
};
</script>
