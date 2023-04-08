<script setup>
import Form from "../components/Forms/PersonalForm.vue";
import { mapState } from "pinia";
import { formStore } from "../stores/personalForm";
</script>

<script>
// import DivisionalPopup from "../components/Modals/DivisionalPopup.vue";
export default {
    computed: {
        // ...mapState(formStore, ["showDivisionalPopupError"]),
    },
    components: {
        // DivisionalPopup,
    },
    name: "PersonalFormContainer",
};
</script>

<template>
    <main class="container mx-auto">
        <Form />
        <!-- <DivisionalPopup v-if="showDivisionalPopupError" /> -->
    </main>
</template>
