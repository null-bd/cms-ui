<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError,
})
useHead({
  title: '404',
})
</script>

<template>
  <section class="flex min-h-screen flex-col items-center justify-center">
    <h1 class="mb-2 text-9xl font-bold font-Cinzel">
      {{ error?.statusCode }}
    </h1>
    <p class="mb-10 text-xl sm:text-3xl">
      {{ error?.statusMessage }}
    </p>
    <NuxtLink
      to="/"
      class="cursor-pointer rounded-md bg-dodgeroll-gold px-4 py-2 text-lg text-white"
    >
      Go home
    </NuxtLink>
  </section>
</template>
