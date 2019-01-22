<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <Label class="action-bar-title" text="Home"></Label>
    </ActionBar>
    <GridLayout>
      <Label class="info" horizontalAlignment="center" verticalAlignment="center">
        <FormattedString>
          <Span class="fa" text.decode="&#xf135; "/>
          <Span :text="message"/>
        </FormattedString>
      </Label>
       <StackLayout>
        <Button text="Back to Master" @tap="goAuth" />
      </StackLayout>
    </GridLayout>
  </Page>
</template>
<script>
import Auth from '~/views/auth/Auth.vue'
export default {
  computed: {
    message() {
      return "5시간 짜리야 세꺄";
    }
  },
  methods : {
    goAuth() {
      this.$navigateTo(Auth)
    }
  }
};
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