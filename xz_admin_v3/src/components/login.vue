<template>
  <div>
    <div class="login_wrapper">
      <div class="animate form login_form">
        <section class="login_content">
          <form>
            <h1>管理员登录</h1>
            <div>
              <input type="text" class="form-control" placeholder="管理员登录名" required v-model='aname' />
            </div>
            <div>
              <input type="password" class="form-control" placeholder="管理员登录密码" required v-model='apwd' />
            </div>
            <div>
              <a class="btn btn-default submit" href="#" @click.prevent="handleClick()">&nbsp;登&nbsp;录&nbsp;</a>
            </div>

            <div class="clearfix"></div>

            <div class="separator">
              <div class="clearfix"></div>
              <br />

              <div>
                <h1><img src="../assets/img/favicon.ico"></i> 学子商城后台管理系统</h1>
                <p>©2017 版权所有，CODEBOY.COM</p>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data:function () {
    return {
	aname:'',
	apwd:''
    }
  },
  methods:{
	handleClick:function(){
		this.$http.get('http://localhost/2018kuangling/xz_admin_v1/data/admin_login.php?'+'aname='+this.aname+'&apwd='+this.apwd).then((result)=>{
			console.log(result.body);
			if(result.body.code==200){
				this.$router.push('/main')
			}
			else{
				alert('登录失败');
			}
		})
	}
  },
  mouted:function(){
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
