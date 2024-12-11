<script setup lang="ts">
import '~/assets/css/abc123.css'
</script>

<template>
  <div id="page-abc123">
    <h2>This page style is loaded from app/assets/css/abc123.css </h2>
    <h3>Image from the public folder</h3>
    <img
      src="/img/icon-nuxt.png"
      alt="Discover Nuxt 3 ICON"
    >
    <hr>
    <h3>Image from the assets folder</h3>
    <img
      src="~/assets/img/icon-nuxt.png"
      alt="Discover Nuxt 3 ICON"
    >
  </div>
</template>
