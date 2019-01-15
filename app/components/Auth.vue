<template>
  <Page>
    <FlexboxLayout class="auth-w">
      <StackLayout class="auth-c">
        <Image src="~/images/pet-logo.png" stretch="none" class="logo"></Image>
        <Label text="PET TAXI"></Label>
        <GridLayout rows="auto, auto, auto, auto">
          <StackLayout row="0" class="input-field">
            <TextField class="input" v-model="email" hint="email come on" keyboardType="email" returnKeyType="next"/>
          </StackLayout>
          <StackLayout row="1" class="input-field">
            <TextField class="input" v-model="nickname" hint="nickname come on" returnKeyType="next"/>
          </StackLayout>
          <StackLayout row="2" class="input-field">
            <TextField class="input" v-model="password" hint="password come on" secure="true" returnKeyType="next"/>
          </StackLayout>
          <StackLayout row="3" class="input-field">
            <TextField class="input" v-model="repassword" hint="repassword come on" secure="true" returnKeyType="done"/>
          </StackLayout>
        </GridLayout>
        <Button text="Button" @tap="onSubmit" />
      </StackLayout>
      <StackLayout>
        <Label text="너는 이미 회원이다"/>
        <Label text="Login"/>
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      nickname: '',
      password: '',
      repassword: '',
    }
  },
  methods: {
    onSubmit() {
      console.log('Works!')
    }
  }
}
</script>
<style lang="scss" scoped>
.auth-w {
  flex-direction: column;
  .auth-c {
    .logo {
      height: 90;
    }
    .input-field {
      margin-bottom: 25;
      .input {
        placeholder-color: #A8A8A8;
      }
    }
  }
}
</style>