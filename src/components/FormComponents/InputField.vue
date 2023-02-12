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
        class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        :id="fieldId"
        :type="fieldType"
        :placeholder="fieldPlaceholder"
        :aria-placeholder="fieldPlaceholder"
        :value="fieldValue"
        autocomplete="off"
        aria-autocomplete="off"
      />
    </div>
  </fieldset>
</template>

<script>
export default {
  props: {
    fieldId: {
      type: String,
      default: "",
    },
    fieldLabel: {
      type: String,
      default: "",
    },
    fieldType: {
      type: String,
      default: "text",
    },
    fieldPlaceholder: {
      type: String,
      default: "",
    },
    fieldValue: {
      type: String,
      default: "",
    },
  },
  name: "InputField",
};
</script>

<style lang="scss" scoped></style>
