import axios from '@/utils/request'


export function login(data){
    axios.post("/user/login/login",data).then(reg=>{
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
}
