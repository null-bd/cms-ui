<script setup lang="ts">
</script>

<template>
  <div id="page-abc123">
    <h2>This page style is loaded from app/assets/css/abc123.css </h2>
    <h3 class="title font-Cinzel">
      Images
    </h3>
    <div class="row">
      <div class="column">
        <h3>Image from the assets folder</h3>
        <ul>
          <li>Set in nuxt.config.ts file</li>
        </ul>
        <p>From assets: </p>
        <NuxtImg
          src="/icon-nuxt.png"
          alt="Discover Nuxt 3 ICON"
          format="webp"
          sizes="xs:100vw sm:667px"
        />
      </div>
      <div class="column">
        <h3>Image from the public folder</h3>
        <p>From public: Just use img tag</p>
        <img
          src="/img/icon-nuxt.png"
          alt="Discover Nuxt 3 ICON"
          format="webp"
          sizes="xs:100vw sm:667px"
          loading="lazy"
        >
      </div>
    </div>
    <h3 class="title font-Cinzel">
      Icons
    </h3>
    <div class="row">
      <div class="column">
        <h3>Icons from the nuxt icons</h3>
        <div class="text-center">
          <Icon
            name="uil:github"
            style="color: black"
            class="h-8 w-8"
          />
        </div>
      </div>
      <div class="column">
        <h3>Icons from the components/Icons folder</h3>
        <div class="text-center">
          <IconsBell class="inline-block h-8 w-8" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
@use "~/assets/sass/abc123.sass"
</style>
