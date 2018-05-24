<template>
  <div class="main">
    <div class="top">
      <h6 class="title">数据库</h6>
      <div class="select">
        <div class="box"><span class="text">排序条件</span></div>
        <ul class="list">
          <li>库名称</li>
          <li>记录数</li>
        </ul>
      </div>
    </div>
    <table>
      <tr class="prop">
        <th>库名称</th>
        <th>记录数</th>
        <th>库描述</th>
      </tr>
      <tr class="item" v-for="(item, index) in list" :key="index">
        <td class="name">{{ item.name }}</td>
        <td class="record">{{ item.record }}</td>
        <td class="desc">{{ item.desc }}</td>
        <i class="rename" />
        <i class="delete" />
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
export default {
  name: 'ManageBase',
  data () {
    return {
      list: [
        {
          name: 'ASDFGHJKLZXCVBNM',
          record: '1234567891011121',
          desc: '最长三十二个汉字字符最长三十二个汉字字符最长三十二个汉字字符最长'
        },
        {
          name: 'ASDFGHJKLZXCVBNM',
          record: '1234567891011121',
          desc: '最长三十二个汉字字符最长三十二个汉字字符最长三十二个汉字字符最长'
        },
        {
          name: 'ASDFGHJKLZXCVBNM',
          record: '1234567891011121',
          desc: '最长三十二个汉字字符最长三十二个汉字字符最长三十二个汉字字符最长'
        }
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
    position: relative;
    flex: none;
    width: 17rem;
    height: 3.4rem;
    cursor: pointer;
    z-index: 1;
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

  .rename {
    background-image: url('../img/rename-db.png');
  }

  .delete {
    background-image: url('../img/delete-db.png');
  }

  .rename, .delete {
    display: inline-block;
    width: 5rem;
    height: 5rem;
    background-repeat:no-repeat;
    background-position: center center;
    background-size: 30% 30%;
    vertical-align: bottom;
  }
</style>
