<template>
  <div>
    <div class="top-header row justify-content-between align-content-center">
      <div class="row align-items-center">
        <burger class="tog mx-1"></burger>
        <div class="m-1 time">الساعة{{time}} بتوقيت الرياض</div>
      </div>

      <div class="left-sec d-flex ">
        <search-bar class=" align-self-center"></search-bar>
        <a
          href="#"
          role="button"
          class="btn px-3 py-2 d-flex align-items-center"
        ><span class="align-self-start">تسجيل الخروج</span>
        <font-awesome-icon icon="arrow-left" class="mr-1 align-self-center"/>
        </a>
      </div>
    </div>
    <div class="main-header text-right">
      <h5 class="header-title">طرق الدفع</h5>
      <div class="mt-2">
        <a href class="ml-2">الاعدادات</a> #
        <span class="mr-2">طرق الدفع</span>
      </div>
    </div>
  </div>
</template>
<script>
import Burger from "@/components/menu/Burger";
import SearchBar from "./global/SearchBar";
export default {
  computed: {
    time:function(){

      return new Date().toLocaleTimeString();;
    }
  },
  components: {
    Burger,SearchBar
  }
};
</script>

<style lang="scss" scoped>
.top-header {
  background-color: #fff;
  height: 60px;
  padding: 12px 30px;
  font-size: 13px;
  .time
  {
    color: #45A787;
    font-weight: 600;

  }
  .left-sec{
    a{
      font-size: 15px;
    }

  }
}
.main-header {
  background-color: #f8f8f8;
  width: 100%;
  padding: 30px 30px;
  font-size: 15px;
  .header-title {
    color: #8d5da7;
    font-weight: 600;
  }
}
@media screen and (max-width: 769px) {
  .top-header {
    background-color: #8d5da7;
    height: 70px;
    color: #fff;
    .time {
      display: none;
    }
  }
}
</style>