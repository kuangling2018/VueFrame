<template>
  <div>
<div class="right_col" role="main">
      <div class="row">
        <div class="col-xs-12 x_title">
          <h3>用户列表</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-3">
          <form class="form-inline">
            <div class="form-group">
              <label for="page-size">每页显示记录数：</label>
              <select class="form-control" id="page-size">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="40">40</option>
                <option value="60">60</option>
                <option value="80">80</option>
                <option value="100">100</option>
              </select>
            </div>
          </form>
        </div>
        <div class="col-xs-4 col-xs-offset-5">
          <div class="form-group has-feedback">
            <label for="product-kw" class="sr-only">搜索关键字：</label>
            <input class="form-control" type="text" id="product-kw" placeholder="请输入搜索关键字">
            <span class="glyphicon glyphicon-search form-control-feedback"></span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div class="table-responsive">
            <table class="table table-hover table-striped" id="table-laptop">
              <thead>
              <tr>
                <th>
                  <div class="checkbox" style="margin: 0;">
                    <label>
                      <input type="checkbox">全选
                    </label>
                  </div>
                </th>
                <th>编号</th>
                <th>头像</th>
                <th>登录名</th>
                <th>用户名</th>
                <th>性别</th>
                <th>邮箱</th>
                <th>电话</th>
                <th>操作</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td colspan="8">
                  <div class="loading">
                    <img src="img/loading.gif" alt="">
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <ul class="pagination pull-right" id="pagination">
                <li><a href="#">上一页</a></li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li class="active"><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">下一页</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  mounted:function(){
	require('../assets/js/user_list.js');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #table-laptop p {
      margin: 0;
    }
    #table-laptop td .title,
    #table-laptop td .fname,
    #table-laptop td .spec {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    #table-laptop td .title {
      width: 120px;
    }
    #table-laptop td .fname {
      width: 80px;
    }
    #table-laptop td .spec {
      width: 60px;
    }
    #table-laptop td .pic{
      width: 40px;
      vertical-align: middle;
      position: absolute;
      margin-top: -8px;
    }
</style>
