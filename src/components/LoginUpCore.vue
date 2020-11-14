<template>
    <div class="body-bg">        
        <e-card class="box-card">
            <!-- <div v-slot:"header" class="clearfix">
                <span>卡片名称</span>   
            </div> -->
            <el-row type="flex" justify="center" class="login-box">
            <el-col :span="6">
                <el-form label-position="left"  label-width="80px"  ref="formLogin">
                <el-form-item label="手机号" prop="phone">
                    <el-input v-model="phone"></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="verify">
                    <el-col :span="10">
                        <el-input v-model="verify"></el-input>
                    </el-col>
                    <el-col :span="14">
                        <el-button  type="primary" @click="getVerify()">获取验证码</el-button>
                    </el-col>
                </el-form-item>
                <el-form-item>                 
                    <el-button  type="danger"  @click="login()" class="margin-top-25 block">登录</el-button>
                    
                </el-form-item>
                </el-form>
            </el-col>
            </el-row>
        </e-card>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
import qs from 'qs';

export default {
    name:'LoginUpCore',
    data(){
        return {
            phone: '13266666666',
            verify: ''
        }
    },
    methods:{
        ...mapActions(["userLogin"]),
        login() {
            //真实环境需要从回来请求回来数据，且也不能只存储姓名性别，主要是要后台标识的key
            let data = {
                phone: this.phone,
                verify: this.verify
            };  
            axios.post("/api/user/login/login",data).then(reg=>{
                var res = reg.data;
                console.log(res)
                if(res.code === "0"){
                    let user = res.content
                    this.userLogin(user);
                    this.$router.push("/");                  
                }else{
                    this.$message(res.msg);    
                }         
            }).catch(e=>{
                this.$message("出错了");
                console.log(e)
            })   
        },
        getVerify(){
            if(!/^1[34578]\d{9}$/.test(this.phone)){
                this.$message({
                    message: '请输入正确的手机号',
                    type: 'warning'
                });
                return ;    
            }
            let data =  {phoneNo: this.phone}
            //const url = "/api/user/login/sendVerify";
            // const options = {
            //     method: 'POST',
            //     headers: { 'content-type': 'application/x-www-form-urlencoded' },
            //     data: JSON.stringify(data),
            //     url,
            //     };
            axios.post("/api/user/login/sendVerify",
                    qs.stringify(data)                    
                    ).then(reg=>{
                var res = reg.data;
                console.log(res)
                if(res.code === "0"){
                    this.$message(res.content)                    
                }else{
                    this.$message(res.msg);    
                }               
            }).catch(e=>{
                this.$message("出错了");
                console.log(e)
            });            
        }
    }
};
</script>

<style>

.body-bg
{  
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: url("../assets/login_bg.jpg") top center no-repeat;
    background-attachment:fixed;
    background-size: cover;
    -moz-background-size:cover;
    -webkit-background-size:cover; 
    position: absolute;
    z-index: -1;   
}
.login-box{
    bottom: 230px;
    top: 150px;
    padding-top: 30px;
    color: #F2EBEB;
}
</style>