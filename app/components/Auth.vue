<template>
  <Page actionBarHidden="true">
    <FlexboxLayout class="auth-w">
      <StackLayout class="auth-c">
        <GridLayout class="auth-p" rows="auto, auto, auto, auto, auto">
          <StackLayout row="0">
            <Image src="~/images/pet-logo.png" class="logo"></Image>
            <Label text="PET TEXI" class="app-name-p"></Label>
          </StackLayout>
          <StackLayout row="1" class="input-field">
            <TextField class="input" v-model="email" hint="email come on" keyboardType="email" returnKeyType="next"/>
          </StackLayout>
          <StackLayout row="2" class="input-field">
            <TextField class="input" v-model="nickname" hint="nickname come on" returnKeyType="next"/>
          </StackLayout>
          <StackLayout row="3" class="input-field">
            <TextField class="input" v-model="password" hint="password come on" secure="true" returnKeyType="next"/>
          </StackLayout>
          <StackLayout row="4" class="input-field">
            <TextField class="input" v-model="repassword" hint="repassword come on" secure="true" returnKeyType="done"/>
          </StackLayout>
          <StackLayout row="5">
            <Label text="너는 이미 회원이다"/>
            <Label text="Login"/>
          </StackLayout>
        </GridLayout>
        <Button text="Button" @tap="onSubmit" />
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
  align-items: center;
  .auth-c {
    margin-left: 30;
    margin-right: 30;
    vertical-align: middle;
    .auth-p {
      .logo {
        height: 90;
      }
      .app-name-p {
        font-size: 25;
        font-weight: bold;
      }
      .input-field {
        margin-bottom: 25;
        .input {
          // placeholder-color: #A8A8A8;
        }
      }
    }
  }
}
</style>