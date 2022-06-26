<template>
  <div class="app">
    <MyHeader />
    <MyGoods />
    <MyFooter />
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";
import MyGoods from "@/components/MyGoods.vue";
import MyFooter from "@/components/MyFooter.vue";


export default {
  components: {
    MyHeader,
    MyGoods,
    MyFooter,
  },
};
</script>

<style  scoped>
  .app{
    box-sizing: border-box;
    padding: 50px 0;
    max-height: 100vh;
    visibility: auto;
  }
</style>>

</style>