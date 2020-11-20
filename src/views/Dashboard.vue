<template>
    <div class="dashboard-wrap">               
    <TKButton></TKButton>
    <TKButton></TKButton>
    </div>
</template>

<script>
import TKButton from "../components/TKButton"
export default{    
    components:{
        TKButton
    },
    mounted(){
        console.log("aaaa");
        console.log(location.hash);
    }
}
</script>

<style scoped>
.dashboard-wrap {
    background-color: #f0f0f0;
}
</style>