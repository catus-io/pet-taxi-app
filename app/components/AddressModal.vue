<template>
  <GridLayout rows="auto, *">
    <GridLayout row="0" columns="50, *, 50" class="address-text-field-w">
      <Label col="0" text="<" @tap="$modal.close()"/>
      <TextField col="1" v-model="address" hint="주소 검색"/>
      <Button col="2" text="검색" @tap="search"/>
    </GridLayout>
    <StackLayout row="1">
      <ScrollView>
        <StackLayout>
          <GridLayout rows="auto, auto, auto" v-for="address in list" :key="address" class="address-item-w" @tap="$modal.close(address)">
            <Label row="0" :text="address.zipNo" class="zipcode address-item-c"/>
            <Label row="1" :text="address.jibunAddr" class="address-item-c"/>
            <Label row="2" :text="address.roadAddr" class="address-item-c"/>
          </GridLayout>
        </StackLayout>
      </ScrollView>
    </StackLayout>
  </GridLayout>
</template>
<script>
export default {
  data() {
    return {
      address: '',
      list: []
    }
  },
  methods: {
    search() {
      this.$bookService.search(this.address)
      .then(response => this.list = response.data)
      .catch(err => console.log(err))
    }
  }
}
</script>
<style lang="scss" scoped>
.address-text-field-w {
  padding: 15;
  border-bottom-color: #c2c2c2;
  border-bottom-width: 1;
}
.address-item-w {
  border-bottom-width: 1;
  border-bottom-color: #c2c2c2;
  padding: 10;
  .zipcode {
    font-size: 15;
  }
  .address-item-c {
    font-size: 13;
    margin: 5;
  }
}
</style>