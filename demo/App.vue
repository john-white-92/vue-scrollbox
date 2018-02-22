<template>
  <div id="app">
    <vue-scrollbox
      mode="vertical"
      :height="height"
      @scroll="onScroll"
      @resize="onResize">
      <div class="demo" tabindex="1">top 1</div>
      <div class="demo" tabindex="1">top 2</div>
      <div class="demo" tabindex="1">top 3</div>
      <div class="demo" tabindex="1">top 4</div>
    </vue-scrollbox>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      height: 10000
    }
  },
  methods: {
    onScroll (offset) {
      console.log('onScroll', offset)
    },
    onResize (viewport, canvas) {
      console.log('onResize', viewport, canvas)
    }
  }
}
</script>

<style lang="scss">
html,
body {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  flex: 0 0 auto;
  height: 100%;
  min-height: 0; // fix cross-browser bug
  min-width: 0; // fix cross-browser bug
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}
#app {
  display: flex;
  flex: 1 1 0px;
  min-height: 0; // fix cross-browser bug
  min-width: 0; // fix cross-browser bug
  padding: 24px;
}
.demo {
  display: flex;
  min-width: 100px;
  min-height: 50px;
  padding: 24px;
  background: rgba(#080, 0.3);
  border: solid 1px #000;
  &:focus {
    background: rgba(#0f0, 0.7);
  }
}
</style>