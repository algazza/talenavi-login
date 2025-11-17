<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { useField, useForm } from "vee-validate";
import { FormSchema } from "../types/form";

const validationSchema = toTypedSchema(FormSchema);

const { handleSubmit, errors } = useForm({
  validationSchema,
});

const { value: email } = useField("email");
const { value: password } = useField("password");

const onSubmit = handleSubmit(values => {
  localStorage.setItem("email", values.email);
  localStorage.setItem("loginAt", `${new Date().toLocaleString()}`);
  alert("Login Berhasil")
})
</script>

<template>
  <form @submit="onSubmit" class="grid gap-6">
    <div class="grid gap-2">
      <label class="text-xs">Email</label>
      <input
        name="email"
        class="bg-white px-5 py-2 rounded-xl text-black border border-muted outline-none"
        :class="errors.email ? 'border-2 border-red-600' : ''"
        type="email"
        placeholder="Enter your email"
        v-model="email"
      />
      <span name="email" class="text-red-300 lg:text-red-600">{{ errors.email }}</span>
    </div>

    <div class="grid gap-2">
      <label class="text-xs">Password</label>
      <input
        name="password"
        class="bg-white px-5 py-2 rounded-xl text-black border border-muted outline-none"
        :class="errors.password ? 'border-2 border-red-600' : ''"
        type="password"
        placeholder="Enter your password"
        v-model="password"
      />
      <span name="email" class="text-red-300 lg:text-red-600">{{ errors.password }}</span>
    </div>

    <div class="flex flex-col gap-2">
      <div class="w-full text-right h-fit">
        <a href="#" class="underline">Lupa Password?</a>
      </div>
      <button
        type="submit"
        class="w-full py-2 bg-primary rounded-lg text-center text-white"
      >
        Sign In
      </button>
    </div>
  </form>
</template>
