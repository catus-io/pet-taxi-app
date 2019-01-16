<template>
  <Page actionBarHidden="true">
    <FlexboxLayout class="auth-w">
      <StackLayout class="auth-c">
            <Label text="PET TAXI" class="app-name-p"></Label>
        <GridLayout class="auth-p" rows="150,auto,*">
          <StackLayout row="0" class="auth-title-i" orientation="horizontal">
            <!-- <Image src="~/images/pet-logo.png" class="logo"></Image> -->
            <!-- <Label width="100%" text="PET TAXI" class="app-name-p"></Label> -->
          </StackLayout>
          <StackLayout row="1" class="auth-input-i">
              <TextField class="input" v-model="email" hint="email come on" keyboardType="email" returnKeyType="next"/>
            <!-- <StackLayout class="input-field" v-show="isSignup"> -->
              <TextField class="input" v-model="nickname" hint="nickname come on" returnKeyType="next"/>
              <TextField class="input" v-model="password" hint="password come on" secure="true" returnKeyType="next"/>
              <TextField class="input" v-model="repassword" hint="repassword come on" secure="true" returnKeyType="done"/>
          </StackLayout>
          <StackLayout row="2">
            <Button :text="isSignup ? '회원가입' : '로그인'" @tap="onSubmit" />
            <Label class="login-p" @tap="toggleAuth">
              <FormattedString>
                <span :text="isSignup ? '이미 회원이시라면' : '비밀번호를 잊으셨다면' "/>
                <span :text="isSignup ? '로그인' : '회원가입'" />
              </FormattedString>
            </Label>
          </StackLayout>
        </GridLayout>
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>
<script>
import Home from './Home'
export default {
  data() {
    return {
      user: {
        email: 'Hello',
        password: 'hello'
      },
      isSignup: false,
      email: '',
      nickname: '',
      password: '',
      repassword: '',
    }
  },
  methods: {
    onSubmit() {
      if(this.isSignup) {
        console.log('저장함')
      }
      else {
        if(this.email == this.user.email && this.password == this.user.password) {
          this.$navigateTo(Home, { clearHistory: true })
        }
      }
    },
    toggleAuth() {
      this.isSignup = !this.isSignup
      this.email = this.nickname = this.password = this.repassword = ''
    }
  }
}
</script>
<style lang="scss" scoped>
.auth-w {
  flex-direction: column;
  align-items: center;
  background: url("~/images/pet-taxi-auth-bg.jpg");
  background-size: cover;
  .auth-c {
    margin-left: 30;
    margin-right: 30;
    vertical-align: middle;
      .app-name-p {
        font-size: 25;
        font-weight: bold;
        horizontal-align: center;
        text-align: center;
      }
    .login-p {
      horizontal-align: center;
      color: #A8A8A8;
      font-size: 16;
    }
    .auth-p {
      .logo {
        height: 180;
      }
      .auth-input-i {
        background-color: red;
        padding-top: 10;

      }
      // .app-name-p {
      //   font-size: 25;
      //   font-weight: bold;
      //   text-align: center;
      //   justify-self: center;
      // }
      // .input-field {
        // margin-bottom: 20;
        .input {
          width: 60%;
          padding: 5;
          border-bottom: 1px soild #333;
          background-color: #f1f1f1;
        }
      // }
    }
  }
}
</style>