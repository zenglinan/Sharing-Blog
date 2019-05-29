<template>
  <div id="app">
    <n-header></n-header>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from "./components/Header";

export default {
  components: {
    "n-header": Header
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
html,body,#app{
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
}
</style>
