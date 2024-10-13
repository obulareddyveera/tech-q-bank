<template>
    <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
        <h1 class="text-2xl font-bold mb-6 text-center">Login</h1>
        <FormKit type="form" @submit="onSubmit">
            <FormKit type="email" name="email" label="Email" placeholder="Enter your email" />
            <FormKit type="password" name="password" label="Password" placeholder="Enter your password" />
        </FormKit>
    </div>
</template>

<script>
import { ref } from 'vue';
import { z } from 'zod';

export default {
    setup() {
        // Define Zod schema
        const loginSchema = z.object({
            email: z.string().email({ message: "Invalid email format" }),
            password: z.string().min(6, { message: "Password must be at least 6 characters" }),
        });

        const onSubmit = (formData, node) => {
            const result = loginSchema.safeParse(formData);
            console.log('Login successful', formData, result);
            if (result.success) {
                // Handle successful submission
            } else {
                node.setErrors(
                    result.error.flatten().fieldErrors
                )
            }
        };

        return { onSubmit };
    },
};
</script>
