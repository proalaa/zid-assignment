<template>
  <div class="sidebar">
    <!-- <div
            class="sidebar-backdrop"
            @click="closeSidebarPanel"
            v-if="isPanelOpen"
    ></div>-->
    <transition name="slide">
      <div v-if="isNavOpen" class="sidebar-panel">
        <div class="sidebar-header">
          <div class="store-info my-auto mx-4">
            <img
              src="@/assets/images/no-logo.png"
              alt="avatar"
              class="img-fluid rounded-pill ml-2 store-avatar"
            />
            <span class="store-name">اسم المتجر</span>
          </div>
          <div class="btns-view">
            <a href="#" role="button">
              مشاهدة المتجر
              <i></i>
            </a>
            <a href="#" role="button">
              تخصيص الواجهة
              <i class></i>
            </a>
          </div>
        </div>
        <div class="nav-wrapper">
          <router-link to="/" tag="a" exact>الرئيسية</router-link>

          <router-link to="/report" tag="a">التقارير</router-link>

          <router-link to="/orders" tag="a">الطلبات</router-link>
          <router-link to tag="a">المنتجات</router-link>
          <router-link to tag="a">التسويق</router-link>
          <router-link to tag="a">العملاء</router-link>
          <router-link to tag="a">منظومة زد</router-link>
          <router-link to tag="a">فريق العمل</router-link>
          <router-link to tag="a">الاعدادات</router-link>
          <router-link to tag="a">خيارات الواجهة</router-link>
          <a role="button">واجهة ليلية</a>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  methods: {
    ...mapMutations(["toggleNav"])
  },
  computed: {
    ...mapGetters(["isNavOpen"])
  }
};
</script>
<style scoped lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
  transition: all 150ms ease-in 0s;
}

/* .sidebar-backdrop {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    cursor: pointer;
} */

.sidebar-panel {
  overflow-y: auto;
  background-color: #362340;
  right: 0;
  top: 0;
  height: 100vh;
  z-index: 999;
  font-weight: 500;
  width: 250px;
  text-align: right;
  color: aliceblue;
}
.nav-wrapper {
  a {
    display: block;
    background-color: #231629;
    transition: all 0.3s ease-in;
    margin-top: 10px;
    width: 100%;
    color: #fff;
    font-size: 13px;
    font-weight: bold;

    padding: 16px 28px;
    &:hover {
      background-color: #57c292;
    }
  }
}

.sidebar-header {
  padding: 22px;
  font-size: 14px;
  font-weight: bold;
  img.store-avatar {
    width: 52px;
  }
  .btns-view {
    a {
      display: block;
      color: #fff;
      border-radius: 7px;
      font-size: 13px;
      font-weight: bold;
      padding: 8px;
      text-align: center;
      margin: 10px 30;
      text-decoration: none;
      transition: all 0.3s ease;
      background-color: #231629;
      margin-top: 10px;

      &:first-of-type {
        background-color: #8d5da7;
        &:hover {
          background-color: #57c292;
        }
      }
      &:hover {
        background-color: #57c292;
      }
    }
  }
}
</style>
