<template>
  <Page>
    <FlexboxLayout class="auth-w">
      <StackLayout class="auth-c">
        <Label text="PET TAXI" class="app-name-p"/>
      </StackLayout>
      <StackLayout class="auth-c input-field-w">
        <GridLayout class="input-field-c" rows="auto, auto, auto, auto">
          <StackLayout row="0" class="input-field-p">
            <TextField class="input" v-model="email" hint="Email" keyboardType="email" returnKeyType="next"/> </StackLayout>
          <StackLayout row="1" class="input-field-p" v-show="isSignup">
            <TextField class="input" v-model="nickname" hint="Nickname" returnKeyType="next"/>
          </StackLayout>
          <StackLayout row="2" class="input-field-p">
            <TextField class="input" v-model="password" hint="Password" secure="true" returnKeyType="next"/>
          </StackLayout>
          <StackLayout row="3" class="input-field-p" v-show="isSignup">
            <TextField class="input" v-model="repassword" hint="Repeat password" secure="true" returnKeyType="done"/>
          </StackLayout>
        </GridLayout>
      </StackLayout>
      <StackLayout class="auth-c">
        <Button :text="isSignup ? '회원가입' : '로그인'" @tap="onSubmit" />
        <Label class="login-p" @tap="toggleAuth">
          <FormattedString>
            <span :text="isSignup ? '이미 회원이시라면' : '비밀번호를 잊으셨다면' "/>
            <span :text="isSignup ? '로그인' : '회원가입'" />
          </FormattedString>
        </Label>
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
  background: url("~/images/pet-taxi-auth-bg.jpg");
  background-size: cover;
  flex-direction: column;
  justify-content: space-between;
  .auth-c {
    align-self: center;
    vertical-align: middle;
    .app-name-p {
      font-size: 25;
      font-weight: bold;
      text-align: center;
      margin-top: 70;
    }
  }
  .input-field-w {
    padding: 50;
    flex: 2;
    .input-field-c {
      background-color: rgba(251, 117, 55, 0.7);
      border-radius: 5;
    }
    .input-field-p {
      margin: 30;
      .input {
        font-size: 20;
      }
    }
  }
}
// .auth-w {
//   background: url("~/images/pet-taxi-auth-bg.jpg");
//   background-size: cover;
//   .auth-c {
//     vertical-align: middle;
//     .app-name-p {
//     }
//     .login-p {
//       color: #A8A8A8;
//       font-size: 16;
//     }
//     .auth-p {
//       .input-field {
//         margin: 0 30;
//         .input {
//           font-size: 20;
//           margin-bottom: 15;
//           // border-bottom: 1px soild #333;
//           // background-color: #f1f1f1;
//         }
//       }
//     }
//   }
// }
</style>