<template>
  <div class="app">
    <MyHeader title='购物车案例'  background='hotpink' color="gold"/>
    <MyGoods v-for='item in goodsList' :key='item.goods_id' :goods='item'/>
    <MyFooter />
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";
import MyGoods from "@/components/MyGoods.vue";
import MyFooter from "@/components/MyFooter.vue";
import axios from 'axios';


export default {
  components: {
    MyHeader,
    MyGoods,
    MyFooter,
  },
  data() {
    return {
      goodsList:[]
    }
  },
  created() {
    this.getList()
  },
  methods:{
   async getList() {
    let res = await axios({
        url: '/api/cart'
      })
      this.goodsList = res.data.list
    }
  }
};
</script>

<style  scoped>
  .app{
    box-sizing: border-box;
    padding: 50px 0;
    Max-height: 100vh;
    overflow: auto;
  }
</style>>

</style>