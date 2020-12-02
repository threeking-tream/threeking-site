<template>
  <div class="tag-wrap">
    <ul>
        <li class="tags-li" v-for="(item,index) in tagsList" :class="{'active': isActive(item.path)}" :key="index">
            <router-link :to="item.path" class="tags-li-title">
                {{item.title}}
            </router-link>
            <span class="tags-li-icon" @click="closeTags(index)"><i class="el-icon-close"></i></span>
        </li>
    </ul>
   </div>
</template>

<script>
import { reactive} from 'vue'
import { useRoute,useRouter } from "vue-router";
import { useStore } from 'vuex';
export default {
    name: "tag",
    setup(pops, ctx){       

        // 获取当前路由
        const route = useRoute()
        // 获取路由实例
        const router = useRouter()

        let tagsList = reactive(useStore().state.tagsList)
        console.log(route)
        console.log(ctx)
        const isActive =(path) =>{            
            return path === route.fullPath;
        }

        // 关闭单个标签
         const closeTags =(index) => {
                const delItem = tagsList.splice(index, 1)[0];
                const item = tagsList[index] ? tagsList[index] : tagsList[index - 1];                
                if (item) {
                    //delItem.path === this.$route.fullPath && this.$router.push(item.path);
                    delItem.path === route.fullPath && route.push(item.path);
                }else{
                    router.push('/');
                }
            }

        return {
            tagsList,
            isActive,
            closeTags
        }
    }
}
</script>

<style lang="scss" scoped>
.tag-wrap {
    position: fixed;
    top: $HearderHigth;
    left: $SidebarWidth ;
    right: 0;
    height: 55px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 1, 0.1);
}
.tags-li {
        float: left;
        margin: 3px 5px 2px 3px;
        border-radius: 3px;
        font-size: 12px;
        overflow: hidden;
        cursor: pointer;
        height: 23px;
        line-height: 23px;
        border: 1px solid #e9eaec;
        background: #fff;
        padding: 0 5px 0 12px;
        vertical-align: middle;
        color: #666;
        -webkit-transition: all .3s ease-in;
        -moz-transition: all .3s ease-in;
        transition: all .3s ease-in;
    }

    .tags-li:not(.active):hover {
        background: #f8f8f8;
    }

    .tags-li.active {
        border: 1px solid #409EFF;
        background-color: #409EFF;
    }

    .tags-li-title {
        float: left;
        max-width: 80px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-right: 5px;
        color: #666;
    }

    .tags-li.active .tags-li-title {
        color: #fff;
    }

    .tags-close-box {
        position: absolute;
        right: 0;
        top: 0;
        box-sizing: border-box;
        padding-top: 1px;
        text-align: center;
        width: 110px;
        height: 30px;
        background: #fff;
        box-shadow: -3px 0 15px 3px rgba(0, 0, 0, .1);
        z-index: 10;
    }

</style>