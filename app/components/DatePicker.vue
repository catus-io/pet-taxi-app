<template>
  <StackLayout class="p-20" backgroundColor="white" tabTextFontSize="16">
    <StackLayout>
      <DatePicker
        minDate="2019-01-23"
        maxDate="2019-12-31"
        v-model="selectedDate"
      />
    </StackLayout>
    <Button class="btn btn-outline" text="확인" @tap="dateOk"/>
    <Button class="btn btn-outline" text="취소" @tap="$modal.close()"/>
  </StackLayout>
</template>

<script>
export default {
  data() {
    return {
      selectedDate: ''
    }
  },
  methods: {
    dateOk() {
      this.$modal.close(this.selectedDate)
    }
  }
};
</script>
<style>
</style>
