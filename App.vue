<template>
  <div id="app">
    <div v-show="isLoading"></div>
    <router-view></router-view>
    <!-- <router-view/> -->
  </div>
</template>

<script>
    export default {
        name: 'app',
        computed: {
            isLoading() {
                if (this.$store.state.isLoading.status) {
                    this.$dialog.loading.open('加载中，请稍后...');
                } else {
                    this.$dialog.loading.close();
                }
                return this.$store.state.isLoading;
            },

        }
    }
</script>

