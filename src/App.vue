<template>
  <!DOCTYPE html>
  <html lang="en">
    <KeepAlive>
      <router-view></router-view>
    </KeepAlive>
  </html>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0%;
}
header {
  padding-left: 13%;
  padding-right: 13%;
  border-bottom: 1px solid black;
  font: bold 30pt Verdana, sans-serif;
  display: flex;
  justify-content: start;
  padding-bottom: 5%;
}
.filter-block {
  display: flex;
  justify-content: space-around;
  margin-bottom: 5%;
  border-bottom: 1px solid black;
  position: relative;
  padding-left: 13%;
  padding-right: 13%;
}
button {
  font: lighter 14pt Verdana, sans-serif;
  padding: 2% 2% 2% 2%;
  margin: 0%;
  border: 0px solid #598d66;
  border-radius: 0px;
  background-color: transparent;
  color: black;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
main {
  padding-left: 13%;
  padding-right: 13%;
}
button:focus {
  font: bold 14pt Verdana, sans-serif;
}
</style>

