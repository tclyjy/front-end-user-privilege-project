<template>
  <div class="bg">
    <div class="error">
      <h1>401 </h1>
      <h2>您的权限不足</h2>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto);

.bg {
  background: url(https://38.media.tumblr.com/546c0cd48d71f210f9b67a389003790d/tumblr_neq0yw9rMA1tm16jjo1_500.gif) no-repeat center center fixed;
  background-size: cover;
  font-family: 'Roboto', sans-serif;
  font-size: 3em;
  margin: .2em .5em;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0px;
}

h1 {
  font-size: 3em;
}

h2 {
  font-size: 1.5em;
  margin: .2em .5em;
  color: rgba(255, 255, 255, 0.6);
  .material-icons {
    font-size: 1.5em;
    position: relative;
    top: 10px;
  }
}

div.error {
  width: 100%;
  text-align: center;
}
</style>
