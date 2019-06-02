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
a {
  text-decoration: none;
}
#app {
  display: flex;
  flex-direction: column;
}
h1 {
  font-size: 28px;
}
h3 {
  font-size: 16px;
}
h4 {
  font-size: 14px;
}
h1,h3,h4 {
  color: #333333;
}
</style>
