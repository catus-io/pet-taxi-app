<template>
  <Page actionBarHidden="true">
    <FlexboxLayout class="auth-w">
      <StackLayout class="auth-c">
        <Label text="PET TAXI" class="app-name-p"/>
      </StackLayout>
      <StackLayout class="auth-c input-field-w">
        <GridLayout class="input-field-c" rows="auto, auto, auto, auto">
          <StackLayout row="0" class="input-field-p">
            <float-label v-model="email" placeholder="Email" secure="false"></float-label>
          </StackLayout>
          <StackLayout row="1" class="input-field-p" v-show="isSignup">
            <float-label v-model="nickname" placeholder="Nickname" secure="false"></float-label>
          </StackLayout>
          <StackLayout row="2" class="input-field-p">
            <float-label v-model="password" placeholder="Password" secure="true"></float-label>
          </StackLayout>
          <StackLayout row="3" class="input-field-p" v-show="isSignup">
            <float-label v-model="repassword" placeholder="Repeat password" secure="true"></float-label>
          </StackLayout>
        </GridLayout>
      </StackLayout>
      <StackLayout class="auth-c">
        <Button :text="isSignup ? '회원가입' : '로그인'" @tap="onSubmit"/>
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
import Home from '~/views/Home.vue'
import FloatLabel from '~/components/FloatLabel.vue'
export default {
  components: {
    'float-label': FloatLabel
  },
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
      repassword: ''
    }
  },
  methods: {
    onSubmit() {
      console.log(this.email)
      console.log(this.password)
      // const baseURI = 'http://192.168.13.4:3000'
      // if(this.isSignup)
      //   this.$http.post(`${baseURI}/api/signup`, { id: this.email, nickname: this.nickname, password: this.password })
      //   .then(console.log('sucessful send'))
      // if(!this.isSignup) {
      //   console.log('hello');
      // }
      // else {
      //   if(this.email == this.user.email && this.password == this.user.password) {
      //     this.$navigateTo(Home, { clearHistory: true })
      //   }
      // }
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
    padding: 60;
    flex: 2;
    .input-field-c {
      background-color: rgba(51, 51, 51, 0.63);
      border-radius: 5;
    }
    .input-field-p {
      margin: 20;
      .input {
        font-size: 10;
        color: #fff;
      }
    }
  }
}
</style>