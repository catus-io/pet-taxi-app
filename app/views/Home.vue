<template>
  <Page class="page">
  <ActionBar title="Title" class="action-bar" >
    <DockLayout width="100%">
      <Label text="Back" width="30%" dock="left"/>
      <Label text="예약하기" width="50%" dock="center" @tap="onSubmit" />
    </DockLayout>
  </ActionBar>
    <StackLayout>
      <FlexboxLayout class="booking-date-w">
        <StackLayout class="date-c">
          <Label class="h3 p-15 m-15 text-left" @tap="showDatePicker">
              <FormattedString>
                <Span :text="formatDate" />
                <Span text="  " />
                <Span class="fa" :text="   '\uf105'" color="black" fontSize="20" />
              </FormattedString>
            </Label>
        </StackLayout>
        <StackLayout class="time-c">
          <Label @tap="showTimePicker">
              <FormattedString>
                <Span :text="formatTime" />
                <Span text="  " />
                <Span class="fa" :text="   '\uf105'" color="black" fontSize="31" />
              </FormattedString>
            </Label>
        </StackLayout>
      </FlexboxLayout>
      <StackLayout class="search-w">
        <Label :class="(selectedDeparture) ? 'search on' : 'search off'" :text="(selectedDeparture) ? selectedDeparture.roadAddr : '출발지 검색'" @tap="showDepartureModal"/>
        <Label :class="(selectedArrival) ? 'search on' : 'search off'" :text="(selectedArrival) ? selectedArrival.roadAddr : '도착지 검색'" @tap="showArrivalModal"/>
      </StackLayout>
      <FlexboxLayout class="info-w">
        <Label class="advanced-info-w" @tap="togglePetInfo" :text="isOn ? '상세 정보' : ''"/>
        <StackLayout v-show="!isOn">
          <GridLayout columns="auto, *" rows="auto, auto, auto">
            <Label col="0" row="0" text="견종 크기" class="pet-info-category-w"/>
            <StackLayout col="1" row="0" orientation="horizontal" class="pet-info-cateogry-w pet-size-w">
              <Label text="대형견" :class="(pet.size == 'big') ? 'pet-size big' : 'pet-size'" @tap="selectSize('big')"/>
              <Label text="중형견" :class="(pet.size == 'middle') ? 'pet-size middle' : 'pet-size'" @tap="selectSize('middle')"/>
              <Label text="소형견" :class="(pet.size == 'small') ? 'pet-size middle' : 'pet-size'" @tap="selectSize('small')"/>
            </StackLayout>
            <Label col="0" row="1" text="견종" class="pet-info-category-w"/>
            <TextField col="1" row="1" v-model="pet.species" hint="견종을 입력해주세요"/>
            <Label col="0" row="2" text="특이사항" class="pet-info-category-w"/>
            <TextField col="1" row="2" v-model="pet.note" hint="특이사항을 알려주세요!"/>
          </GridLayout>
        </StackLayout>
      </FlexboxLayout>
    </StackLayout>
  </Page>
</template>
<script>
import Auth from '~/views/auth/Auth.vue'
import DatePicker from '~/components/DatePicker.vue'
import TimePicker from '~/components/TimePicker.vue'
import AddressModal from '~/components/AddressModal.vue'
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
      pet: {
        size: 'big',
        species: '',
        note: '',
      },
      selectedDate: new Date(),
      selectedTime: new Date(),  
      selectedDeparture: null,
      selectedArrival: null,
    }
  },
  computed: {
    formatDate() {
      const year = this.selectedDate.getFullYear()
      const month = this.selectedDate.getMonth()+1
      const date = this.selectedDate.getDate()
      return `${year}년 ${month}월 ${date}일`;
    },
    formatTime() {
      const hour = this.selectedTime.getHours()
      const minute = this.selectedTime.getMinutes()
      if(hour < 12) return `오전 ${hour}시 ${minute}분`;
      else if(hour == 12) return `오후 ${hour}시 ${minute}분`;
      else return `오후 ${hour-12}시 ${minute}분`;
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
    showDepartureModal() {
      this.$showModal(AddressModal)
      .then(selectedDeparture => {
        if(!selectedDeparture) return;
        this.selectedDeparture = selectedDeparture
      })
    },
    showArrivalModal() {
      this.$showModal(AddressModal)
      .then(selectedArrival => {
        if(!selectedArrival) return;
        this.selectedArrival = selectedArrival
      })
    },
    togglePetInfo() {
      this.isOn = !this.isOn
    },
    onLogout() {
      this.$storage.remove('token')
      this.$navigateTo(Auth, { clearHistory: true })
    },
    selectSize(size) {
      this.pet.size = size
    },
    onSubmit() {
      const book = {
        date: this.selectedDate,
        time: this.selectedTime,
        departure: this.selectedDeparture,
        arrival: this.selectedArrival,
        info: this.pet
      }
      this.$bookService.book(book)
      .then(response => alert('예약이 성공하셨습니다!'))
      .catch(err => console.log(err))
    }
  },
}
</script>
<style scoped lang="scss">
// Start custom common variables
@import '../app-variables';
// End custom common variables
.action-bar {
  background-color: rgba(0, 174, 102, 0.85);
}
.booking-date-w {
  flex-direction: column;
  align-items: center;
  .date-c {
    margin-top: 50;
  }
  .time-c {
    font-size: 25;
    font-weight: bold;
    margin: 10 0 50 0;
  }
}
.search-w {
  box-shadow: 3 3 #000000;
  border-bottom-color: #e4e1e1;
  border-bottom-width: 1;
  border-top-color: #e4e1e1;
  border-top-width: 1;
}
.search {
  padding: 15;
  font-size: 16;
}
.search.off {
  color: #c2c2c2;
}
.search.on {
  color: #000000;
}
.info-w {
  justify-content: center;
  align-items: center;
  font-size: 13;
  margin-top: 15;
}
.advanced-info-w {
  margin-top: 10;
  padding: 10;
  color: rgb(219, 35, 35);
}
.pet-size-w {
  padding: 10;
}
.pet-size {
  padding: 7;
  border-width: 1;
  border-color: #e4e1e1;
}
.pet-size.big {
  color: rgb(219, 35, 35);
  border-color: rgb(219, 35, 35);
}
.pet-size.middle {
  border-color: rgb(219, 35, 35);
}
.pet-size.small {
  border-color: rgb(219, 35, 35);
}
.pet-info-category-w {
  padding: 10;
}
// Custom styles
.fa {
  color: $accent-dark;
}
.info {
  font-size: 20;
}
</style>