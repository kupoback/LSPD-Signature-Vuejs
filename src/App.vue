<script setup>
import { RouterLink, RouterView } from "vue-router";
import LogoSVG from "./assets/logo.svg?component";
</script>

<template>
  <div class="container-full bg-gray-800">
    <header class="container py-2">
      <nav class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <LogoSVG alt="Vite logo" class="logo" height="30px" width="40px" />
        </div>
      </nav>
    </header>

    <RouterView />
  </div>
</template>

<style lang="scss" scoped></style>
