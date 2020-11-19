<template>
  <div class="main-wrap">
    <router-view />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.main-wrap {
    position:fixed;
    left: $SidebarWidth;
    top: 100px;
    right: 0;
    bottom: 0;
    border: 30px solid #f0f0f0;
    border-bottom: none;
    padding: 30px;
}

</style>