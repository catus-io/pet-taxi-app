<template>
  <Page class="page">
  <ActionBar title="Title" class="action-bar" >
    <GridLayout columns="auto, auto">
      <Button col="0" text="Back" @tap="onButtonTap" />
      <Button col="1" text="예약하기" @tap="onButtonTap" />
    </GridLayout>
  </ActionBar>
    <StackLayout>
      <Button text="날짜 선택" @tap="showDatePicker" col="0" class="btn btn-primary m-t-20" />
      <Label text="2019.01.10" />
      <StackLayout>
        <Button text="출발지" @tap="showSearch" col="0" class="btn btn-primary m-t-20" />
        <Label text="전라북도 전주시 완산구 신봉3길 32" />
      </StackLayout>
      <StackLayout>
        <Button text="도착지" @tap="showSearch" col="0" class="btn btn-primary m-t-20" />
        <Label text="전라북도 전주시 덕진구 봉신3길 21" />
      </StackLayout>
      <StackLayout>
        <Label @tap="togglePetInfo">
          <FormattedString>
            <span :text="isOn ? '상세정보' : '상세정보 닫기' "/>
          </FormattedString>
        </Label>
      </StackLayout>
      <StackLayout v-show="!isOn">
        <TextField v-model="pet.size" hint="견종 크기 " />
        <TextField v-model="pet.species" hint="견종 종류" />
        <TextField v-model="pet.note" hint="특이사항" />
      </StackLayout>


    </StackLayout>
  </Page>
</template>
<script>
import Auth from '~/views/auth/Auth.vue'
import DatePicker from '~/components/DatePicker.vue'
import TimePicker from '~/components/TimePicker.vue'
export default {
  data() {
    return {
      isOn: true,
      date: '2019. 01. 31',
      time: '',
      departure: '',
      arrival: '',
      pet: {
        size: 'Biggest',
        species: 'dic',
        note: '지랄맞음',
      }

    }

  },
  computed: {
    message() {
      return "5시간 짜리야 세꺄";
    }
  },
  methods : {
    goAuth() {
      this.$navigateTo(Auth)
    },
    showDatePicker() {
      this.$showModal(DatePicker);

    },
    showSearch() {
      this.$showModal(TimePicker);

    },
    togglePetInfo() {
      this.isOn = !this.isOn
    }
  }
};
</script>
<style scoped lang="scss">
// Start custom common variables
@import '../app-variables';
// End custom common variables

// Custom styles
.fa {
  color: $accent-dark;
}

.info {
  font-size: 20;
}
</style>