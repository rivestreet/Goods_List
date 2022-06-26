<template>
  <div class="my-counter">
    <button type="button" class="btn btn-light" @click="goods.goods_count--">
      -
    </button>
    <input type="number" class="form-control inp" v-model="goods.goods_count" />
    <button type="button" class="btn btn-light" @click="goods.goods_count++">
      +
    </button>
  </div>
</template>

<script>
export default {
  // props: ["goods"],
  props: {
    goods: {
      type: Object,
      required: true,
    },
  },
  watch: {
    goods: {
      immediate: true, //刷新页面立即执行一次监视页面
      deep: true, //深度监视
      handler(newval) {
        if (newval.goods_count < 0) {
          this.goods.goods_count = 0;
        }
      },
    },
  },
};
</script>

<style lang="less" scoped>
.my-counter {
  display: flex;
  .inp {
    width: 45px;
    text-align: center;
    margin: 0 10px;
  }
  .btn,
  .inp {
    transform: scale(0.9);
  }
}
</style>