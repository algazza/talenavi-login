<script setup lang="ts">
import logo from "../public/icon.png";
import background from "../public/background.png";
</script>

<template>
  <main
    class="overflow-hidden text-sm w-full h-dvh flex justify-center items-center font-medium bg-img max-lg:text-white lg:bg-background"
  >
    <div class="lg:max-w-6xl lg:flex lg:rounded-2xl overflow-hidden">
      <section class="max-lg:hidden">
        <img
          :src="background"
          alt=""
          class="w-full h-full object-center object-cover"
        />
      </section>

      <section
        class="flex flex-col gap-12 justify-center lg:bg-white lg:px-24 items-center"
      >
        <div class="grid gap-6 justify-items-center">
          <div class="size-28">
            <img
              :src="logo"
              alt="logo"
              class="w-full h-full object-center object-cover"
            />
          </div>
          <h2 class="text-2xl">Selamat Datang Kembali!</h2>
        </div>

        <form class="grid gap-6">
          <div class="grid gap-2">
            <label class="text-xs">Email</label>
            <input
              name="email"
              class="bg-white px-5 py-2 rounded-xl text-black border border-muted focus:border-muted"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div class="grid gap-2">
            <label class="text-xs">Password</label>
            <input
              class="bg-white px-5 py-2 rounded-xl text-black border border-muted focus-visible:border-none"
              type="password"
              placeholder="Enter your password"
            />
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

        <p class="text-accent">
          Belum punya akun?
          <span class="underline text-white lg:text-black">Daftar di sini</span>
        </p>
      </section>
    </div>
  </main>
</template>
