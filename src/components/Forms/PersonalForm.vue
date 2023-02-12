<script>
import InputField from "../FormComponents/InputField.vue";
import FormButton from "../FormComponents/FormButton.vue";
export default {
  data: () => ({
    linePlaceholder: "Bureau - Division - Position",
  }),
  components: { FormButton, InputField },
  methods: {},
  computed: {},
  name: "FormView",
};
</script>

<template>
  <div class="w-full">
    <form class="px-8 pt-6 pb-8 mb-4">
      <InputField
        :field-id="name"
        field-label="Name"
        field-placeholder="FirstName LastName"
      />
      <InputField
        :field-id="badgeNumber"
        field-label="Badge Number"
        field-placeholder="00000"
      />
      <InputField
        :field-id="servingTime"
        field-label="Serving Time"
        field-placeholder="11/Aug/2017 - Present"
      />
      <InputField
        :field-id="lineOne"
        field-label="Line One"
        :field-placeholder="linePlaceholder"
      />
      <InputField
        :field-id="lineTwo"
        field-label="Line Two"
        :field-placeholder="linePlaceholder"
      />
      <InputField
        :field-id="lineThree"
        field-label="Line Three"
        :field-placeholder="linePlaceholder"
      />
      <InputField
        :field-id="lineFour"
        field-label="Line Four"
        :field-placeholder="linePlaceholder"
      />

      <div class="md:flex md:items-center">
        <FormButton
          fieldSetClass="md: w-2 / 3"
          buttonClass="dark:bg-white focus:shadow-outline focus:outline-none dark:text-black font-bold py-2 px-4 rounded"
          buttonLabel="Submit"
          buttonType="submit"
        />
      </div>
    </form>
  </div>
</template>
