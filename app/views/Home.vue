<template>
  <Page class="page">
  <ActionBar title="Title" class="action-bar" >
    <GridLayout columns="auto, auto">
      <Button col="0" text="Back" @tap="onButtonTap" />
      <Button col="1" text="예약하기" @tap="onButtonTap" />
    </GridLayout>
  </ActionBar>
    <StackLayout>
      <Label col="0" :text="formatToday" @tap="showDatePicker" /> 
      <Label col="0" :text="formatTime" @tap="showTimePicker"/>
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
      <Button text="logout" @tap="onLogout"/>
    </StackLayout>
  </Page>
</template>
<script>
import Auth from '~/views/auth/Auth.vue'
import DatePicker from '~/components/DatePicker.vue'
import TimePicker from '~/components/TimePicker.vue'
export default {
  created() {
    this.$userService.verifyToken(this.$storage.getString('token'))
    .catch(() => {
      this.$storage.remove('token')
      this.$navigateTo(Auth, { clearHistory: true })
    })
  },
  data() {
    return {
      isOn: true,
      time: '',
      departure: '',
      arrival: '',
      pet: {
        size: 'Biggest',
        species: 'dic',
        note: '지랄맞음',
      },
      selectedDate: new Date(),
      selectedTime: new
    }
  },
  computed: {
    formatToday() {
      const year = this.selectedDate.getFullYear()
      const month = this.selectedDate.getMonth()+1
      const date = this.selectedDate.getDate()

      return `${year}년 ${month}월 ${date}일`;
    }
  },
  methods: {
    goAuth() {
      this.$navigateTo(Auth)
    },
    showDatePicker() {
      this.$showModal(DatePicker)
      .then(selectedDate => {
        if(selectedDate) this.selectedDate = selectedDate 
      })
    },
    showTimePicker() {
      this.$showModal(TimePicker)
      .then(selectedTime => {
        if(selectedTime) this.selectedTime = selectedTime 
      })
    },
    showSearch() {
      this.$showModal(TimePicker);

    },
    togglePetInfo() {
      this.isOn = !this.isOn
    },
    onLogout() {
      this.$storage.remove('token')
      this.$navigateTo(Auth, { clearHistory: true })
    },
  },
}
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