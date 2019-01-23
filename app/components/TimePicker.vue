<template>
  <StackLayout class="p-20" backgroundColor="white" tabTextFontSize="16">
    <StackLayout>
      <TimePicker v-model="selectedTime" />
    </StackLayout>
    <Button class="btn btn-outline" text="확인" @tap="timeOk"/>
    <Button class="btn btn-outline" text="취소" @tap="$modal.close()"/>
  </StackLayout>
</template>

<script>
export default {
  data() {
    return {
      selectedTime: ''
    }
  },
  methods: {
    timeOk() {
      this.$modal.close(this.selectedTime)
    }
  }
};
</script>
<style>
</style>

