<script>
    export default {
        props: {
            buttonAction: {
                type: Function,
                default: () => {},
            },
            buttonClass: {
                type: String,
                default: "",
            },
            buttonLabel: {
                type: String,
                default: "",
            },
            buttonType: {
                type: String,
                default: "button",
            },
            fieldSetClass: {
                type: String,
                default: "",
            },
        },
        methods: {},
        emits: {},
    };
</script>

<template>
    <fieldset :class="fieldSetClass">
        <button
            :class="buttonClass"
            :type="buttonType"
            @click="buttonAction"
            @keydown.enter="buttonAction"
            v-html="buttonLabel"
        />
    </fieldset>
</template>
