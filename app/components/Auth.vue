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
        </GridLayout>
        <Button :text="isUser ? 'Log In' : 'Sign Up'" @tap="onSubmit" />

                <!-- <Button :text="isLoggingIn ? 'Log In' : 'Sign Up'" :isEnabled="!processing"
                    @tap="submit" class="btn btn-primary m-t-20"></Button> -->

        <Label class="login-p"  @tap="goToLogin">
          <FormattedString>
            <span text="너는 이미 회원이다 "/>
            <span text="Login"/>
          </FormattedString>
        </Label>
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>
<script>
export default {
  data() {
    return {
      isUser: false,
      email: '',
      nickname: '',
      password: '',
      repassword: '',
    }
  },
  methods: {
    onSubmit() {
      console.log('Works!')
      alert('helo')
    },
    goToLogin() {
      this.isUser = true
      console.log('>>>>>> HELow? <<<<<', this.isUser)

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
    .login-p {
      horizontal-align: center;
      color: #A8A8A8;
      font-size: 16;
    }
    .auth-p {
      .logo {
        height: 180;
      }
      .app-name-p {
        font-size: 25;
        font-weight: bold;
        text-align: center;
      }
      .input-field {
        margin-bottom: 20;
        .input {
          // placeholder-color: #A8A8A8;
        }
      }
    }
  }
}
</style>