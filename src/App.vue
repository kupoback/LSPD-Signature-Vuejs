<script setup>
import { RouterLink, RouterView } from "vue-router";
import LogoSVG from "./assets/logo.svg?component";
</script>

<template>
  <header class="container py-2 mx-auto">
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <LogoSVG
          alt="Vite logo"
          class="fill-current h-8 w-8 mr-2"
          height="30px"
          width="40px"
        />
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Docs
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Examples
          </a>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped></style>
