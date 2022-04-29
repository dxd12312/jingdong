<template>
    <div class="position">
        <span class="iconfont position__icon">&#xe60e;</span>
        南京工业职业技术大学计算机与软件学院软件工程技术本科专业2021级
        <span class="iconfont position__notice">&#xe60a;</span>
    </div>
    <!-- 搜索 -->
    <div class="search">
      <span class="iconfont">&#xe7b3;</span>
      <span class="search__text">山姆会员商店优惠商品</span>
    </div>
    <!-- banner -->
    <div class="banner">
      <img src="http://47.101.182.200:9000/vue3/banner.jpeg"
        class="banner__img">
    </div>
        <!-- icon九宫格区 -->
    <div class="icons">
      <div class="icons__item" v-for="item in iconsList" :key="item.desc">
        <img class="icons__item__img" :src="`http://47.101.182.200:9000/vue3/icon/${item.imgName}.png`">
        <p class="icons__item__desc">{{item.desc}}</p>
      </div>
    </div>
    <div class="gap"></div>
</template>
<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconsList = [
      { imgName: '超市', desc: '超市便利' },
      { imgName: '菜市场', desc: '菜市场' },
      { imgName: '水果店', desc: '水果店' },
      { imgName: '鲜花', desc: '鲜花绿植' },
      { imgName: '医药健康', desc: '医疗健康' },
      { imgName: '家居', desc: '家居时尚' },
      { imgName: '蛋糕', desc: '烘焙蛋糕' },
      { imgName: '签到', desc: '签到' },
      { imgName: '大牌免运', desc: '大牌免运' },
      { imgName: '红包', desc: '红包套餐' }
    ]
    return { iconsList }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/virables.scss';
@import '../../style/mixins.scss';
.position {
    position: relative;
    padding: 0.16rem 0.18rem 0.16rem 0;
    line-height: 0.22rem;
    font-size: 0.16rem;
    // 引入样式的混入
    @include ellips;
    .position__icon {
      position: relative;
      top: 0.01rem;
      font-size: 0.2rem;
    }
    .position__notice {
    position: absolute;
    right: 0;
    top: 0.17rem;
    font-size: 0.2rem;
  }
    color: $content-fontcolor;
  }
  .search {
    margin-bottom: 0.12rem;
    line-height: 0.32rem;
    background: $search-bgColor;
    color: $search-fontColor;
    border-radius: 0.16rem;
    .iconfont {
      display: inline-block;
      padding: 0 0.08rem 0 0.16rem;
      font-size: 0.16rem;
    }
    &__text {
      display: inline-block;
      font-size: 0.14rem;
    }
  }
  .banner {
    height: 0;
    overflow: hidden;
    // hack技巧：预留出高度防抖（图片高/图片宽）
    padding-bottom: 25.4%;
    &__img {
      width: 100%;
    }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &__item {
    width: 20%;
    margin-bottom: 0.16rem;
    &__img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
    &__desc {
      margin: 0.06rem 0 0.06rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}

.gap {
  // 设置负值 让分隔条的宽变整宽
  margin: 0 -0.18rem;
  height: 0.1rem;
  background-color: $content-bgColor;
}
</style>
