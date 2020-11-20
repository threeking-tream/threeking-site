<template>
    <div class="header-wrap">
        <div class="full-left header-iocn">
            <i class="el-icon-s-fold"></i>
        </div>
        
        <div class="full-right">
            <div class="full-left header-user-info">
                <img src="../../assets/images/face.jpg"  alt="">
                詹姆斯
            </div>
            <div class="full-left header-zones  header-iocn"><el-button class="info btn-logout" @click="logout">退出</el-button></div>            
        </div>
    </div>
  
</template>

<script>
import {mapActions} from 'vuex'
export default {
   methods:{
    ...mapActions(['userlogout']),
    logout(){
        this.userlogout();
        this.$router.push('/login');
    }
  }
}
</script>

<style lang="scss" scoped>
.header-wrap {
    position: fixed;
    top: 0;
    left: $SidebarWidth;
    right: 0;
    height: $HearderHigth;
    background-color:#242f42;    
    -webkit-box-shadow: 0 3px 16px 16px  rgba(0, 0, 0, 0.1);
    line-height: $HearderHigth;

}
.header-iocn {
    padding: 0 32px;
    i {           
        font-size: 2em;
        cursor: pointer;
    }
}
.header-user-info {
    img {       
        width: 35px;
    }
}

</style>