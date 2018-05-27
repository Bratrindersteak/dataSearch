<template>
    <div class="main">
        <div class="popup" style="display: none"><i class="close"></i></div>
        <div class="top">
            <h6 class="title">用户管理</h6>
            <div class="opts">
                <div class="add-user"></div>
                <p class="tips">已全部显示，共10个</p>
            </div>
        </div>
        <table>
            <tr class="prop">
                <th>用户名</th>
                <th>用户权限</th>
            </tr>
            <tr class="item" v-for="(item, index) in list" :key="index">
                <td class="name">{{ item.username }}</td>
                <td class="record">{{ item.authority }}</td>
                <i class="delete" title="删除"/>
            </tr>
        </table>
        <!--<ul class="list">-->
        <!--<li class="item" v-for="(item, index) in list" :key="index">-->
        <!--<span class="name">{{ item.name }}</span>-->
        <!--<span class="record">{{ item.record }}</span>-->
        <!--<span class="desc">{{ item.desc }}</span>-->
        <!--<i class="rename" />-->
        <!--<i class="delete" />-->
        <!--</li>-->
        <!--</ul>-->
    </div>
</template>

<script>
    import select from '../json/select.json'

    export default {
        name: 'ManageBase',
        data () {
            return {
                select: select[0],
                selectList: 'none',
                list: [
                    {
                        username: '用户',
                        authority: '数据导入、数据导出、查询计算',
                    },
                    {
                        username: '用户',
                        authority: '数据导入、数据导出、查询计算',
                    },
                    {
                        username: '用户',
                        authority: '数据导入、数据导出、查询计算',
                    }
                ]
            }
        },
        methods: {
            fold: function(e) {
                this.selectList = 'none';
            },
            unfold: function(e) {
                this.selectList = 'block';
            }
        }
    }
</script>

<style scoped>
    .popup {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 24.8rem;
        height: 17.6rem;
        margin-top: -8.8rem;
        margin-left: -12.4rem;
        background-color: #FFFFFF;
        box-shadow: 0 0 5px 0 rgba(3, 21, 63, 0.30);
        border-radius: 4px;
        z-index: 10;
    }

    .popup .close {
        position: absolute;
        top: 0;
        right: 0;
        width: 3.3rem;
        height: 3.3rem;
        background-image: url(../img/close-popup.png);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 39.39% 39.39%;
        transform: rotate(0deg);
        transition: transform 0.5s;
        cursor: pointer;
    }

    .popup .close:hover {
        transform: rotate(360deg);
    }

    .main {
        flex-grow: 1;
    }

    .top {
        display: flex;
        height: 5.8rem;
        justify-content: space-between;
        align-items: center;
        padding: 3.1rem 3.6rem 0;
    }

    .title {
        flex: none;
        height: 1.6rem;
        font-size: 1.6rem;
        font-weight: normal;
        color: #666666;
    }

    .select {
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

    table {
        width: 100%;
    }

    tr {
        display: flex;
        justify-content: flex-start;
        padding-left: 3.6rem;
        text-align: left;
        font-size: 1.4rem;
        color: #273351;
    }

    th, td {
        flex: none;
        padding: 0;
    }

    th {
        height: 2.2rem;
        line-height: 2.2rem;
        font-weight: normal;
    }

    td {
        height: 5rem;
        line-height: 5rem;
    }

    th:nth-child(1), td:nth-child(1) {
        width: 22%;
    }

    th:nth-child(2), td:nth-child(2) {
        width: 22%;
    }

    th:nth-child(3), td:nth-child(3) {
        width: 39%;
    }

    .prop {
        font-size: 1.2rem;
        color: #999999;
    }

    .item {
        position: relative;
        border-bottom: 1px solid transparent;
        cursor: pointer;
    }

    .item:nth-child(1) {
        border-top: 1px solid transparent;
    }

    .item:before {
        content: '';
        position: absolute;
        top: -1px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #e8ecf8;
        opacity: 0.5;
    }

    .item:after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #e8ecf8;
        opacity: 0.5;
    }

    .item:hover {
        background-color: #f7f9ff;
    }

    .item:hover:before, .item:hover:after {
        opacity: 1;
    }

    .delete {
        background-image: url('../img/remove-user.png');
    }

    .delete {
        display: inline-block;
        width: 5rem;
        height: 5rem;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 30% 30%;
        vertical-align: bottom;
    }

    .opts {
        display: flex;
        align-items: center;
    }

    .add-user {
        position: relative;
        width: 1.8rem;
        height: 1.8rem;
        margin-right: 3.7rem;
    }

    .add-user:before {
        content: '';
        position: absolute;
        top: -0.1rem;
        right: -1.7rem;
        width: 1px;
        height: 2.1rem;
        background-color: #E8ECF8;
    }

    .add-user:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(../img/remove-user.png);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100% 100%;
        cursor: pointer;
    }

    .tips {
        font-size: 16px;
        color: #999999;
    }
</style>
