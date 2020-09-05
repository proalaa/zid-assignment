<template>
  <div id="app">
    <div class="page row">
      <div class="main-nav">
        <Sidebar />
      </div>
      <div class="col container-fluid">
        <Burger></Burger>

        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Burger from "@/components/menu/Burger";
import Sidebar from "@/components/menu/Sidebar";

export default {
  name: "App",

  components: {
    Sidebar,
    Burger
  }
};
</script>
<style lang="scss"></style>
