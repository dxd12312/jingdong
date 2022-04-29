<template>
  <h2>我的</h2>
  <AppDocker :currentIndex="3" />
  <MyPage />
</template>

<script>
import AppDocker from '../../components/AppDocker.vue'
import MyPage from '../../components/MyPage.vue'
export default {
  name: 'PersonalPage',
  components: {
    AppDocker,
    MyPage
  }
}
</script>

 <style lang="scss" scoped></style>
