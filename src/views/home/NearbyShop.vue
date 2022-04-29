<template>
   <div class="nearby">
      <h3 class="nearby__title">附近店铺</h3>
      <router-link
         v-for="item in nearbyList"
         :key="item._id"
         :to="`/shop/${ item._id }`"
      >
        <ShopInfo :item="item" />
      </router-link>
   </div>
</template>

<script setup>
import { toRefs, reactive } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo.vue'

const data = reactive({ nearbyList: [] })

get('/shop/hot-list').then((result) => {
  if (result?.code === 200 && result?.data) {
    console.log(result.data)
    data.nearbyList = result.data
  }
})

const { nearbyList } = toRefs(data)
</script>

<style lang="scss" scoped>
@import '../../style/virables.scss';
.nearby {
    &__title{
        margin: 0.16rem 0 0.02rem 0;
        font-size: 0.18rem;
        font-weight: normal;
        color: $content-fontcolor;
    }
    a {
        text-decoration: none;
    }
}
</style>
