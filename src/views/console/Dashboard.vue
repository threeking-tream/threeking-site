<template>
    <div class="dashboard-wrap">               
      
        <div>dashboard页面</div>
        <TKButton></TKButton>
        <TKButton></TKButton>
        <div>{{msg}}</div>
        <div v-for="(item, index) in milut" :key="index">{{ item.name}}</div>
    </div>
</template>

<script>
import TKButton from "@/components/TKButton"
import {ref, reactive} from "vue"
export default{  
    name: 'Dashboard',
    setup(){

        const msg = ref("hello");

        const milut = reactive([
            {name:"张三",age: 20},
            {name:"李四",age: 21}
        ]);

        return {
            msg,
            milut
        }
    } ,
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