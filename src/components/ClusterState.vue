<template>
    <div class="main" id="main">
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
            </h6>
            <ul class="status">
                <li><span>CPU</span><i>30%</i></li>
                <li><span>RAM</span><i>36GB/256GB</i></li>
                <li><span>HD</span><i>36GB/256GB</i></li>
                <li><span>Net</span><i>104KB/S</i></li>
            </ul>
        </div>
        <div class="block">
            <h6 class="block-title">
                <span>故障节点</span>
                <!--<select-div data="selectFailure" />-->
                <div class="select" @focus="failureUnfold" @blur="failurefold" tabindex="0">
                    <div class="box">
                        <span class="text">{{ selectFailure.label }}</span>
                    </div>
                    <ul class="list" :style="{display: selectFailureList}">
                        <li v-for="(item, index) in selectFailure.list" :key="index">{{ item }}</li>
                    </ul>
                </div>
            </h6>
            <ul class="broken">
                <li class="broken-item active">
                    <span class="name">N_xxxxx</span>
                    <button type="button" class="repair">修复中</button>
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
                <li class="broken-item">
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
            </ul>
        </div>
        <div class="block">
            <h6 class="block-title">
                <span>工作节点</span>
                <div class="opts">
                    <div class="set" @focus="setUnfold" @blur="setFold"  tabindex="0">
                        <ul class="list" :style="{display: setList}">
                            <li class="item">负载调控</li>
                            <li class="item">删除节点</li>
                        </ul>
                    </div>
                    <div class="select" @focus="orderUnfold" @blur="orderfold" tabindex="0">
                        <div class="box"><span class="text">{{ selectOrder.label }}</span></div>
                        <ul class="list" :style="{display: selectOrderList}">
                            <li v-for="(item, index) in selectOrder.list" :key="index">{{ item }}</li>
                        </ul>
                    </div>
                </div>
            </h6>
            <ul class="working">
                <li class="item active">
                    <button type="button" class="sync"></button>
                    <div class="content">
                        <div class="left"></div>
                        <ul class="right">
                            <li class="data">
                                <span class="value">30%</span>
                                <span class="desc">CPU</span>
                            </li>
                            <li class="data">
                                <span class="value">36GB/256GB</span>
                                <span class="desc">RAM</span>
                            </li>
                            <li class="data">
                                <span class="value">36GB/256GB</span>
                                <span class="desc">HD</span>
                            </li>
                        </ul>
                    </div>
                    <p class="name">N_xxxxx</p>
                </li>
                <li class="item">
                    <div class="content">
                        <div class="left"></div>
                        <ul class="right">
                            <li class="data">
                                <span class="value">30%</span>
                                <span class="desc">CPU</span>
                            </li>
                            <li class="data">
                                <span class="value">36GB/256GB</span>
                                <span class="desc">RAM</span>
                            </li>
                            <li class="data">
                                <span class="value">36GB/256GB</span>
                                <span class="desc">HD</span>
                            </li>
                        </ul>
                    </div>
                    <p class="name">N_xxxxx</p>
                </li>
                <li class="item">
                    <div class="content">
                        <div class="left"></div>
                        <ul class="right">
                            <li class="data">
                                <span class="value">30%</span>
                                <span class="desc">CPU</span>
                            </li>
                            <li class="data">
                                <span class="value">36GB/256GB</span>
                                <span class="desc">RAM</span>
                            </li>
                            <li class="data">
                                <span class="value">36GB/256GB</span>
                                <span class="desc">HD</span>
                            </li>
                        </ul>
                    </div>
                    <p class="name">N_xxxxx</p>
                </li>
                <li class="item">
                    <div class="content">
                        <div class="left"></div>
                        <ul class="right">
                            <li class="data">
                                <span class="value">30%</span>
                                <span class="desc">CPU</span>
                            </li>
                            <li class="data">
                                <span class="value">36GB/256GB</span>
                                <span class="desc">RAM</span>
                            </li>
                            <li class="data">
                                <span class="value">36GB/256GB</span>
                                <span class="desc">HD</span>
                            </li>
                        </ul>
                    </div>
                    <p class="name">N_xxxxx</p>
                </li>
                <li class="item">
                    <div class="content">
                        <div class="left"></div>
                        <ul class="right">
                            <li class="data">
                                <span class="value">30%</span>
                                <span class="desc">CPU</span>
                            </li>
                            <li class="data">
                                <span class="value">36GB/256GB</span>
                                <span class="desc">RAM</span>
                            </li>
                            <li class="data">
                                <span class="value">36GB/256GB</span>
                                <span class="desc">HD</span>
                            </li>
                        </ul>
                    </div>
                    <p class="name">N_xxxxx</p>
                </li>
                <li class="item">
                    <div class="content">
                        <div class="left"></div>
                        <ul class="right">
                            <li class="data">
                                <span class="value">30%</span>
                                <span class="desc">CPU</span>
                            </li>
                            <li class="data">
                                <span class="value">36GB/256GB</span>
                                <span class="desc">RAM</span>
                            </li>
                            <li class="data">
                                <span class="value">36GB/256GB</span>
                                <span class="desc">HD</span>
                            </li>
                        </ul>
                    </div>
                    <p class="name">N_xxxxx</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Select from './parts/Select.vue';
    import select from '../json/select.json';

    export default {
        name: 'ClusterState',
        components: {
            'select-div': Select
        },
        data () {
            return {
                selectFailure: select[1],
                selectFailureList: 'none',
                selectOrder: select[2],
                selectOrderList: 'none',
                setList: 'none'
            }
        },
        methods: {
            failurefold: function(e) {
                this.selectFailureList = 'none';
            },
            failureUnfold: function(e) {
                this.selectFailureList = 'block';
            },
            orderfold: function(e) {
                this.selectOrderList = 'none';
            },
            orderUnfold: function(e) {
                this.selectOrderList = 'block';
            },
            setFold: function(e) {
                this.setList = 'none';
            },
            setUnfold: function(e) {
                this.setList = 'block';
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .main {
        overflow: hidden;
        flex: inherit;
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
        display: flex;
        justify-content: space-between;
        align-items: center;
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
        top: 1.2rem;
        right: 1.3rem;
        width: 3.9rem;
        height: 1.8rem;
        line-height: 1.8rem;
        text-align: right;
        padding: 0 0.3rem 0 0;
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

    .active .repair {
        padding: 0;
        text-align: center;
        background: none;
        border: 1px solid #749AFA;
        box-sizing: border-box;
        color: #749AFA;
        cursor: default;
    }

    .active .repair:after {
        width: 0;
        height: 0;
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

    .working .item {
        position: relative;
        flex: 0 1 auto;
        width: 31.5135%;
        height: 22rem;
        margin-bottom: 1.7rem;
        /*padding-left: 9.9188%;*/
        border: 1px solid #e8ecf8;
        box-sizing: border-box;
    }

    .working .active {
        box-shadow: 0 0 5px 0 rgba(3,21,63,0.20);
    }

    .working .active {
        box-shadow: 0 0 5px 0 rgba(3, 21, 63, 0.20);
    }

    .working .sync {
        overflow: hidden;
        position: absolute;
        top: 0;
        right: 0;
        width: 4.5rem;
        height: 4.5rem;
        padding: 0;
    }

    .working .sync:before {
        content: '';
        position: absolute;
        top: 0.8rem;
        right: 0.4rem;
        width: 1.5rem;
        height: 1.5rem;
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
        top: -1.7rem;
        right: -2.5rem;
        width: 6.2rem;
        height: 4.5rem;
        background-image: linear-gradient(#82a6ff 0%, #769af3 100%);
        transform: rotate(45deg);
    }

    .working .content {
        display: flex;
        height: 18.2rem;
    }

    .working .left {
        flex: none;
        width: 15.6rem;
        height: 15.6rem;
    }

    .working .right {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        flex: none;
    }

    .working .data {
        position: relative;
        margin-top: 1.1rem;
        padding-left: 1.4rem;
    }

    .working .data:nth-child(1) {
        margin-top: 0;
    }

    .working .data:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 100%;
    }

    .working .data:nth-child(1):after {
        background-color: #92B1FD;
    }

    .working .data:nth-child(2):after {
        background-color: #FA8994;
    }

    .working .data:nth-child(3):after {
        background-color: #FBB04E;
    }

    .working .value {
        display: block;
        height: 2.4rem;
        line-height: 2.4rem;
        font-size: 1.8rem;
        color: #273351;
    }

    .working .desc {
        display: block;
        height: 1.8rem;
        line-height: 1.8rem;
        font-size: 1.2rem;
        color: #999999;
    }

    .working .name {
        height: 3.8rem;
        line-height: 3.8rem;
        text-align: center;
        margin: 0;
        font-size: 1.4rem;
        color: #273351;
    }

    /* --- select --- */

    .select {
        float: none;
        outline: none;
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
        background-image: url(../img/select-pull.png);
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
        box-shadow: 0 0 2px 0 rgba(3, 21, 63, 0.30);
        border-radius: 4px;
        box-sizing: border-box;
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

    .set {
        outline: none;
        float: none;
        display: inline-block;
        position: relative;
        width: 1.8rem;
        height: 1.8rem;
        margin-right: 3.5rem;
    }

    .set:before {
        content: '';
        position: absolute;
        top: -0.1rem;
        right: -1.7rem;
        width: 1px;
        height: 2.1rem;
        background-color: #E8ECF8;
    }

    .set:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(../img/set.png);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100% 100%;
        cursor: pointer;
    }

    .set .list {
        position: absolute;
        top: 1.2rem;
        right: 0.8rem;
        width: 8.7rem;
        padding: 0.3rem 0;
        background: #FFFFFF;
        box-shadow: 0 0 2px 0 rgba(3, 21, 63, 0.30);
        border-radius: 4px;
        box-sizing: border-box;
        z-index: 1;
    }

    .set .list .item {
        height: 3rem;
        line-height: 3rem;
        padding-left: 1.9rem;
        font-size: 14px;
        color: #666666;
        cursor: pointer;
    }

    .set .list .item:hover {
        background-color: #F5F6FB;
        color: #273351;
    }

    .opts {
        display: flex;
        align-items: center;
    }
</style>
