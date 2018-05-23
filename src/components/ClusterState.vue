<template>
  <div class="container" id="container">
    <div class="block">
      <h6 class="block-title"><span>节点概览</span></h6>
      <ul class="overview">
        <li><span>总结点数</span><i>65536</i></li>
        <li><span>新增结点数</span><i>20</i></li>
        <li><span>故障结点数</span><i>5</i></li>
      </ul>
    </div>
    <div class="block">
      <h6 class="block-title">
        <span>集群状态</span>
        <div class="select">
          <span></span>
          <ul class="list">
            <li></li>
          </ul>
        </div>
      </h6>
      <ul class="status">
        <li><span>CPU</span><i>30%</i></li>
        <li><span>RAM</span><i>36GB/256GB</i></li>
        <li><span>HD</span><i>36GB/256GB</i></li>
        <li><span>Net</span><i>104KB/S</i></li>
      </ul>
    </div>
    <div class="block">
      <h6 class="block-title"><span>故障节点</span></h6>
      <ul class="broken">
        <li class="broken-item active">
          <span class="name">N_xxxxx</span>
          <button type="button" class="repair">修复</button>
          <ul class="info">
            <li class="info-item">
              <span class="label">故障类型：</span>
              <span class="text">硬盘故障</span>
            </li>
            <li class="info-item">
              <span class="label">故障原因：</span>
              <span class="text">硬盘故障</span>
            </li>
            <li class="info-item">
              <span class="label">故障概述：</span>
              <span class="text">最长需要16个汉字，最短为"N/A"3个字符</span>
            </li>
          </ul>
        </li>
        <li class="broken-item"></li>
        <li class="broken-item"></li>
        <li class="broken-item"></li>
      </ul>
    </div>
    <div class="block">
      <h6 class="block-title"><span>工作节点</span></h6>
      <ul class="working">
        <li class="active">
          <button type="button" class="sync"></button>
        </li>
        <li>
          <button type="button" class="sync"></button>
        </li>
        <li>
          <button type="button" class="sync"></button>
        </li>
        <li>
          <button type="button" class="sync"></button>
        </li>
        <li>
          <button type="button" class="sync"></button>
        </li>
        <li>
          <button type="button" class="sync"></button>
        </li>
        <li>
          <button type="button" class="sync"></button>
        </li>
        <li>
          <button type="button" class="sync"></button>
        </li>
        <li>
          <button type="button" class="sync"></button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    overflow: hidden;
    flex-grow: 1;
    /*margin-left: 17.916%;*/
    /*margin-left: 258px;*/
    padding-left: 36px;
    padding-right: 36px;
    padding-bottom: 34px;
  }

  .block {
    margin-top: 34px;
  }

  .block-title {
    height: 52px;
    line-height: 52px;
    font-size: 1.6rem;
    font-weight: normal;
    color: #666666;
  }

  .overview {
    display: flex;
    justify-content: space-between;
  }

  .overview li {
    position: relative;
    width: 31.5135%;
    /*width: 350px;*/
    height: 110px;
    line-height: 110px;
    flex: 0 1 auto;
    color: #ffffff;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    text-align: center;

  }

  .overview li:nth-child(1) {
    background-image: url(../img/total-node.png);
  }

  .overview li:nth-child(2) {
    background-image: url(../img/new-node.png);
  }

  .overview li:nth-child(3) {
    background-image: url(../img/broken-node.png);
  }

  .overview span {
    position: absolute;
    top: 14px;
    left: 17px;
    /*margin-left: 17px;
      line-height: 50px;*/
    line-height: 1.6rem;
    font-size: 1.6rem;
  }

  .overview i {
    font-size: 3rem;
  }

  .status {
    display: flex;
    justify-content: space-between;
  }

  .status li {
    position: relative;
    flex: 0 1 auto;
    width: 23.4445%;
    height: 110px;
    padding-left: 9.9188%;
    background-color: #f7f9ff;
    box-sizing: border-box;
  }

  .status span {
    display: block;
    line-height: 4rem;
    font-size: 1.6rem;
    color: #3764d3;
  }

  .status i {
    display: block;
    line-height: 3.2rem;
    font-size: 2.4rem;
    color: #273351;
  }

  .status li:after {
    content: '';
    position: absolute;
    top: 20px;
    left: 7.6923%;
    width: 26.923%;
    height: 70px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .status li:nth-child(1):after {
    background-image: url(../img/cpu.png);
  }

  .status li:nth-child(2):after {
    background-image: url(../img/ram.png);
  }

  .status li:nth-child(3):after {
    background-image: url(../img/hd.png);
  }

  .status li:nth-child(4):after {
    background-image: url(../img/net.png);
  }

  /* --- 故障节点 --- */
  .broken {
    display: flex;
    justify-content: space-between;
  }

  .broken-item {
    position: relative;
    flex: 0 1 auto;
    width: 23.4445%;
    height: 166px;
    padding: 0 12px;
    background-color: #f7f9ff;
    box-sizing: border-box;
  }

  .broken .active {
    background-color: #ffffff;
    box-shadow: 0 0 5px 0 rgba(3, 21, 63, 0.20);
  }

  .broken .name {
    display: inline-block;
    height: 4.6rem;
    line-height: 4.6rem;
    font-size: 1.4rem;
    color: #273351;
  }

  .broken .repair {
    position: absolute;
    top: 12px;
    right: 13px;
    /*width: 39px;*/
    height: 1.8rem;
    line-height: 1.8rem;
    padding: 0 3px 0 16px;
    font-size: 1rem;
    background-image: linear-gradient(-90deg, #82A6FF 0%, #769AF3 95%);
    box-shadow: 0 0 2px 0 rgba(5, 15, 47, 0.20);
    border-radius: 2px;
    color: #ffffff;
  }

  .broken .repair:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 4px;
    width: 10px;
    height: 10px;
    margin-top: -5px;
    background-image: url(../img/repair.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%;
  }

  .broken .info {
    font-size: 1.4rem;
    color: #273351;
  }

  .broken .info-item {
    line-height: 28px;
  }

  /* --- 故障节点 --- */

  .working {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .working li {
    position: relative;
    flex: 0 1 auto;
    width: 31.5135%;
    height: 220px;
    margin-bottom: 17px;
    padding-left: 9.9188%;
    background-color: #f7f9ff;
    border: 1px solid #e8ecf8;
    box-sizing: border-box;
  }

  .working .active {
    box-shadow: 0 0 5px 0 rgba(3, 21, 63, 0.20);
  }

  .working .sync {
    position: absolute;
    top: 0;
    right: 0;
    width: 45px;
    height: 45px;
  }

  .working .sync {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    width: 45px;
    height: 45px;
  }

  .working .sync:before {
    content: '';
    position: absolute;
    top: 8px;
    right: 4px;
    width: 15px;
    height: 15px;
    background-image: url(../img/sync.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    transform: rotate(0deg);
    transition: transform 1s;
    z-index: 1;
  }

  .working .sync:hover:before {
    transform: rotate(360deg);
  }

  .working .sync:after {
    content: '';
    position: absolute;
    top: -17px;
    right: -25px;
    width: 62px;
    height: 45px;
    background-image: linear-gradient(#82a6ff 0%, #769af3 100%);
    transform: rotate(45deg);
  }
</style>
