<template>
  <div class="vcWrap">
    <input
      v-for="n in len"
      :key="'codeInput' + n"
      :ref="'codeInput' + n"
      v-model.trim.number="code[n-1]"
      @keydown="onkeydown(n)"
      @keyup="onkeyup(n)"
    />
  </div>
</template>

<script>
export default {
  name: "EtVerifyCode",
  props: ["length"], // 子组价不允许修改父组件传过来的值，会报错
  data() {
    return {
      len: this.length || 4,
      code: new Array(this.len),
      keyCodes: [
        48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 8, 13
      ]
    };
  },
  methods: {
      onkeydown(n){
        //   console.log(n);
        if(!this.keyCodes.includes(event.keyCode)){  // 拦截keyCodes以外的数字
            event.returnValue = false
        } else if ( event.keyCode === 8 && n > 1 && this.code[n-1] === '') {
            this.$refs['codeInput'+(n-1)][0].focus()
            event.returnValue = false
        }
      },
      onkeyup(n){
        //   console.log(n);
        if((event.keyCode >= 48 && event.keyCode <= 57) || event.keyCode >= 96 && event.keyCode <= 105){
            this.$set(this.code, n - 1, event.key)
            if(n < this.len) this.$refs['codeInput'+(n + 1)][0].focus()
            // 往外抛出一个发布事件
            this.$emit('sendCodeInput', this.code.join(''))
        } else if (event.keyCode === 8) {
            this.$emit('sendCodeInput', this.code.join(''))
        } else if (event.keyCode === 13) {
            if(this.code.join('').length === this.len) this.$emit('goNext')
        }
      }
  },
};
</script>

<style lang="stylus">
.vcWrap
  input
    width 40px
    height 40px
    line-height: 40px

    -webkit-appearance: none;
    // background-color: #fff;
    // background-image: none;
    // border: 1px solid #dcdfe6;
    background-color: #f7f9fa;
    border: 1px solid #f7f9fa;

    box-sizing: border-box;
    display: inline-block;
    font-size: inherit;
    outline: 0;
    padding: 0 14px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    border-radius: 4px;

    margin-right 1em
    &:last-child
      margin-right 0
</style>