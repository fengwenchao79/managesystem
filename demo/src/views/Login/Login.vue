<template>
  <div class="login">
    <div class="loginwrapper">
      <h1 class="title">
        <i class="iconfont icon-zhanghaoguanli"></i>
        欢迎登录华联超市管理系统
      </h1>
      <el-form
        :model="loginForm"
        status-icon
        :rules="rules"
        ref="loginForm"
        label-width="100px"
        class="demo-ruleForm"
      >
      <!-- 账号 -->
        <el-form-item label="账号" prop="account">
          <el-input type="text" v-model="loginForm.account" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码" prop="password">
          <el-input type="text" v-model="loginForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 确认密码 -->
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="text" v-model="loginForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
          <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    //自定义验证 密码
    let validatePwd = (rule, value, callback)=>{
            if(value === ""){
                callback(new Error("请输入密码"))
            }else if(value.length<3 || value.length > 5){
                callback(new Error("长度3到5个字符"))
            }else{
                //如果确认密码不为空，要触发一致性验证
                if(this.loginForm.checkPass !== ""){
                    this.$refs.loginForm.validateField("checkPass")
                }
                //成功的回调
                callback();
            }
    }
   //自定义验证 确认密码
   let checkPwd = (rule, value, callback)=>{
    //    console.log("1",rule);
    //    console.log("2",value);
    //    console.log("3",callback);
    if(value === ""){
        callback(new Error("请输入密码"));
    }else if(value != this.loginForm.password){//一致性验证
        callback(new Error("两次密码不一致"));
    }else{
        //直接调用就成功
        callback();
    }
   }
    return {
      loginForm: {
        account: "",//账号
        password: "",//密码
        checkPass: ""//确认密码
      },
      rules: {
       //账号验证
       account:[
           {required:true,message:"输入账号",trigger:"blur"},
           {min:3,max:5,message:"长度3到5个字符",trigger:"blur"}
       ],
       //密码验证
       password:[
        //    {required:true,message:"输入密码",trigger:"blur"},
        //    {min:3,max:5,message:"长度3到5个字符",trigger:"blur"}
        //改造密码验证
            {required:true, validator: validatePwd, trigger: 'blur' }
       ],
       //确认密码验证
       checkPass: [
            {required:true, validator: checkPwd, trigger: 'blur' }
          ]
      }
    };
  },
  methods: {
      //提交表单
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("前端数据全部通过验证");
          //跳转到后端首页
          this.$router.push("/index")
        } else {
          console.log("前端数据验证失败！！");
          return false;
        }
      });
    },
    //重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="less">
@import "./Login.less";
</style>