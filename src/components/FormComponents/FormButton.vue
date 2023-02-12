<script>
export default {
  props: {
    btnAction: {
      type: String,
      default: "",
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
      default: "",
    },
    fieldSetClass: {
      type: String,
      default: "",
    },
  },
  methods: {
    buttonAction() {
      this.$emit(this.btnAction);
    },
  },
};
</script>

<template>
  <fieldset :class="fieldSetClass">
    <button :class="buttonClass" :type="buttonType" @click="buttonAction" @keydown.enter="buttonAction"
      v-html="buttonLabel" />
  </fieldset>
</template>
