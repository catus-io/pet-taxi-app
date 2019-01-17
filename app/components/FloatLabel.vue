<template>
  <GridLayout rows="30, auto" marginBottom="5">
    <Label ref="label" row="1" :text="placeholder" opacity="0.4" fontSize="14" class="input" />
		<TextField 
      v-model="inputVal"
      ref="textField" 
      :secure="secure" 
      row="1" 
      @focus="onFocus" 
      @blur="onBlur" 
      borderBottomWidth="3" 
      borderBottomColor="#cec8c8" 
      padding="0" />
  </GridLayout>
</template>
<script>
import { Color } from 'color'
export default {
  props: {
    value: { type: String },
    placeholder: { type: String },
    secure: { type: Boolean }
  },
  data() {
    return {
      inputVal: this.value
    }
  },
  methods: {
    onFocus() {
      const label = this.$refs.label.nativeView
      const textField = this.$refs.textField.nativeView
      label
      .animate({
          translate: { x: 0, y: -25 },
          opacity: 1
      })
      .then(() => {}, () => {})

      // set the border bottom color to green to indicate focus
      textField.borderBottomColor = new Color("#00b47e");
    },
    onBlur() {
      const label = this.$refs.label.nativeView
      const textField = this.$refs.textField.nativeView
      if (!textField.text) {
        label
        .animate({
            translate: { x: 0, y: 0 },
            opacity: 0.4
        })
        .then(() => {}, () => {});
      }
      // reset border bottom color.
      textField.borderBottomColor = new Color("#cec8c8");
    }
  },
  watch: {
    inputVal(val) {
      this.$emit('input', val)
    }
  }
}
</script>
<style lang="sass" scoped>
</style>