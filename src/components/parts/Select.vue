<template>
  <div class="select">
    <div class="box"><span class="text">data.label</span></div>
    <ul class="list">
      <li>item</li>
    </ul>
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .select {
    float: none;
    position: relative;
    flex: none;
    width: 17rem;
    height: 3.4rem;
    cursor: pointer;
    z-index: 1;
  }

  .select:after {
    content: '';
    position: absolute;
    top: 1.4rem;
    right: 1.3rem;
    width: 0.9rem;
    height: 0.6rem;
    background-image: url(../../img/select-pull.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%;
  }

  .select .box {
    line-height: 3.4rem;
    padding-left: 1.3rem;
    background-color: #FCFCFF;
    border: 1px solid #E8ECF8;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 14px;
    color: #999999;
  }

  .select .list {
    position: absolute;
    width: 100%;
    padding: 0.3rem 0;
    background: #FFFFFF;
    box-shadow: 0 0 2px 0 rgba(3,21,63,0.30);
    border-radius: 4px;
  }

  .select .list li {
    height: 3rem;
    line-height: 3rem;
    padding-left: 1.9rem;
    font-size: 14px;
    color: #666666;
  }

  .select .list li:hover {
    background-color: #F5F6FB;
    color: #273351;
  }
</style>
