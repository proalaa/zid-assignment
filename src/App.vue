<template>
  <div id="app">
    <div class="page row">
      <div class="main-nav">
        <Sidebar />
      </div>

      <div class="col p-0 page">
        <Header />

        <main class="mt-4">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/menu/Sidebar";
// import Burger from "@/components/menu/Burger";
import Header from "@/components/Header";
import { mapGetters } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters(["isNavOpen"])
  },
  components: {
    Sidebar,

    Header
  }
};
</script>
<style lang="scss">
#app {
  transition: all 0.5s ease-in-out;
  .main-nav{
    z-index: 99999;
  }
  .page{
    transition: all .5s ease-in-out;
  }

}
</style>
