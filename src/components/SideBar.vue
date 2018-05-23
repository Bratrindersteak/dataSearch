<template>
  <div class="menu" id="menu">
    <div class="wrap">
      <div class="user">
        <img src="../img/user.png" width="40" class="user-profile" /><span class="user-name">网络管理员</span>
      </div>
      <ul class="nav" id="nav">
        <li class="item active">集群状态</li>
        <li class="item">管理库</li>
        <li class="item">用户管理</li>
      </ul>
    </div>
  </div>
</template>

<script></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .menu {
    /*position: fixed;*/
    width: 17.916%;
    min-width: 160px;
    /*width: 258px;*/
    /*height: 100%;*/
    float: left;
    border-right: 1px solid #eaeef8;
    box-sizing: border-box;
  }

  .menu .wrap {
    position: fixed;
    width: 17.83%;
    min-width: 160px;
  }

  .user {
    line-height: 68px;
  }

  .user img {
    margin-left: 22px;
    margin-right: 11px;
    vertical-align: middle;
  }

  .user-profile {
    margin-left: 22px;
  }
  .user-name {
    margin-left: 11px;
    font-size: 1.6rem;
    color: #666666;
  }

  .nav .item {
    position: relative;
    height: 48px;
    line-height: 48px;
    padding-left: 47px;
    font-size: 1.4rem;
    color: #999999;
    cursor: pointer;
  }

  .nav .item:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 47px;
    height: 48px;
  }

  .nav .item:nth-child(1):after {
    background: url(../img/static-icon.png) no-repeat;
    background-position: 22px 17px;
    background-size: 15px 15px;
  }

  .nav .item:nth-child(2):after {
    background: url(../img/store-icon.png) no-repeat;
    background-position: 22px 17px;
    background-size: 15px 15px;
  }

  .nav .item:nth-child(3):after {
    background: url(../img/custom-icon.png) no-repeat;
    background-position: 22px 17px;
    background-size: 15px 15px;
  }

  .nav .item:hover, .nav .active {
    background-color: #f7f9ff;
    color: #769af3;
  }
</style>
