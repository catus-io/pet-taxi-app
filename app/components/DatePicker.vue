<template>
  <StackLayout class="p-20" backgroundColor="white" tabTextFontSize="16">
      <TabView>
        <TabViewItem title="ma">
          <StackLayout>
            <DatePicker
              :year="currentYear"
              :month="currentMonth"
              :day="currentDay"
              minDate="1970-01-01"
              maxDate="2100-12-31"
            />
          </StackLayout>
        </TabViewItem>
        <TabViewItem title="시간">
          <StackLayout>
            <TimePicker :hour="currentHour" :minute="currentMinute"/>
          </StackLayout>
        </TabViewItem>
      </TabView>

    <Label class="h2 text-center" text="This is a modal page."/>
    <Button class="btn btn-outline" text="Close Modal" @tap="$modal.close()"/>
  </StackLayout>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
</style>
