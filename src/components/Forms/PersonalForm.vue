<script>
import InputField from "../FormComponents/InputField.vue";
import FormButton from "../FormComponents/FormButton.vue";
import DateRange from "../DateRange.vue";

export default {
  data: () => ({
    linePlaceholder: "Bureau - Division - Position",
  }),
  components: { FormButton, InputField, DateRange },
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
      <DateRange
        :fieldId="servingTime"
        fieldLabel="Serving Time"
        fieldClasses="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
