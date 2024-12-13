<script setup lang="ts">
useHead({
  title: 'Home',
  meta: [
    { name: 'description', content: 'My amazing site.' },
  ],
})
useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
    <AppAlert>
      This is an auto-imported component.
    </AppAlert>
    <h1 id="home">
      Welcome to the homepage
    </h1>
    <div class="text-center">
      <Button>Click me</Button>
    </div>
  </div>
</template>
