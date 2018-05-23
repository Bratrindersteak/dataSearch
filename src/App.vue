<template>
  <div id="app">
    <router-view/>
    <router-view name="main" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html, body {
    height: 100%;
  }

  html {
    font-size: 10px;
  }

  @media screen and (min-width:1200px) and (max-width:1279px){html{font-size: 8px}}
  @media screen and (max-width:1200px){html{font-size: 6px}}

  body {
    margin: 0;
  }

  ul {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }

  li {
    list-style: none;
  }

  h6 {
    margin-top: 0;
    margin-bottom: 0;
  }

  i {
    font-style: normal;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
  }
</style>
