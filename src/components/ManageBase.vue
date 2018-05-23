<template>
  <div class="main">
    <ul class="list">
      <li class="item" v-bind:class="{ active: item.isActive }" v-for="(item, index) in list" :key="index"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ManageBase',
  data () {
    return {
      list: [
        {isActive: false},
        {isActive: true},
        {isActive: false}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    flex-grow: 1;
  }

  .list .item {
    position: relative;
    height: 50px;
    line-height:50px;
    font-size: 1.4rem;
    border-bottom: 1px solid transparent;
    color: #273351;
  }

  .list .item:nth-child(1) {
    border-top: 1px solid transparent;
  }

  .list .item:before {
    content: '';
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #e8ecf8;
    opacity: 0.5;
  }

  .list .item:after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #e8ecf8;
    opacity: 0.5;
  }

  .list .active {
    background-color: #f7f9ff;
  }

  .list .active:before, .list .active:after {
    opacity: 1;
  }
</style>
