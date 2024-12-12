<script setup lang="ts">

</script>

<template>
  <header>
    <h1 class="text-3xl font-bold text-blue-900">
      Site Name
    </h1>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">
            About
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/abc123">
            ABC123
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/login">
            Login
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/something">
            404
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
