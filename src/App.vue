<script setup>
import { RouterLink, RouterView } from "vue-router";
import LogoSVG from "./assets/logo.svg?component";
</script>

<script>
export default {
    name: "App",
};
</script>

<template>
    <header class="container py-2 mx-auto">
        <nav
            class="flex items-center justify-between flex-wrap bg-blue-800 p-6"
        >
            <div class="flex items-center flex-shrink-0 text-white mr-6 h-40 w-40">
                <img src="https://i.imgur.com/ALYJ5PI.png" alt="LSPD Logo" />
            </div>
            <div
                class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
            >
                <div class="lg:flex-grow">
                    <p class="text-4xl text-white">LSPD Image Generator</p>
                    <!-- <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Docs
          </a> -->
                </div>
            </div>
        </nav>
    </header>

    <RouterView />
</template>

<style lang="scss" scoped></style>
