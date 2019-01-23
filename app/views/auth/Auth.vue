<template>
  <Page actionBarHidden="true">
    <FlexboxLayout class="auth-w">
      <StackLayout class="auth-c app-title-w">
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
      <StackLayout class="auth-c auth-toggle-w">
        <Button :text="isSignup ? '회원가입 ' : '로그인'" @tap="onSubmit"/>
        <Label class="login-p" @tap="toggleAuth">
            <span :text="isSignup ? '이미 회원이시라면 ' : '비밀번호를 잊으셨다면 ' "/>
            <span class="child" :text="isSignup ? ' 로그인' : ' 회원가입'" />
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
      isSignup: false,
      email: '',
      nickname: '',
      password: '',
      repassword: ''
    }
  },
  methods: {
    onSubmit() {
      if(this.isSignup){
        this.$userService.signup({ email: this.email, nickname: this.nickname, password: this.password })
        .then(() => this.isSignup = false)
      }
      else {
        this.$userService.signin({ email: this.email, password: this.password })
        .then(response => {
          this.$storage.setString('token', response.data.success)
          this.$navigateTo(Home, { clearHistory: true })
        })
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
    // vertical-align: middle;
  }
  .app-title-w {
    .app-name-p {
      font-size: 33;
      color: black;
      font-weight: bold;
      text-align: center;
      margin-top: 70;
    }
  }
  .input-field-w {
    padding: 0 90;
    flex: 2;
    .input-field-c {
      margin-top: 20;
      border-radius: 5;
    }
    .input-field-p {
      // margin: 20;
      .float-label {
        font-size: 10;
        color: #fff;
        margin: 0 0;
        padding: 0 0;
      }
    }
  }
  .auth-toggle-w {
    Button {
      color: white;
      font-weight: bold;
      background-color: rgba(0, 174, 102, 0.85);
    }
    .login-p {
      margin-bottom: 87; 
      background-color: rgba(255, 255, 255, 0.75);
      padding: 5 10;
      .child {
        font-weight: bold;

      }

    }
  }
}
</style>