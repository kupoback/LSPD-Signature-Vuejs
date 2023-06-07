<template>
    <fieldset class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
            <label
                class="font-bold md:text-right mb-1 md:mb-0 pr-4"
                :for="fieldId"
                v-html="fieldLabel"
            />
        </div>
        <div class="md:w-2/3">
            <input
                v-model="inputValue"
                :class="fieldClasses"
                :id="fieldId"
                :type="fieldType"
                :placeholder="fieldPlaceholder"
                :aria-placeholder="fieldPlaceholder"
                :value="inputValue"
                autocomplete="off"
                aria-autocomplete="off"
                @keyup="focusAction()"
            />
        </div>
    </fieldset>
</template>

<script>
    export default {
        props: {
            fieldClasses: {
                type: String,
                default:
                    "appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",
            },
            fieldId: {
                type: [Number, String],
                default: "",
            },
            fieldLabel: {
                type: String,
                default: "",
            },
            fieldPlaceholder: {
                type: String,
                default: "",
            },
            fieldType: {
                type: String,
                default: "text",
            },
            fieldValue: {
                type: String,
                default: "",
            },
            focusEvent: {
                type: Function,
                default: () => {},
            },
        },
        data: () => ({
            inputValue: "",
        }),
        mounted() {
            this.fieldValue.length && (this.inputValue = this.fieldValue);
        },
        methods: {
            focusAction() {
                this.focusEvent({
                    field: this.fieldId,
                    value: this.inputValue,
                });
            },
        },
        name: "InputField",
    };
</script>

<style lang="scss" scoped></style>
