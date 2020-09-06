<template>
  <div>
    <div class="top-header row justify-content-between align-content-center">
      <div class="row">
        <burger class="tog mx-1"></burger>
        <div class="m-1 time">الساعة{{time}} بتوقيت الرياض</div>
      </div>

      <div class="left-sec">
        <a
          href="#"
          role="button"
          class="btn btn-outline-success rounded-pill px-3 py-2"
        >تسجيل الخروج</a>
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
export default {
  computed: {
    time: () => {
      Date.now();
    }
  },
  components: {
    Burger
  }
};
</script>

<style lang="scss" scoped>
.top-header {
  background-color: #fff;

  padding: 12px 30px;
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