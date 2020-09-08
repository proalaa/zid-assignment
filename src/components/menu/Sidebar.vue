<template>
  <div class="sidebar">
    <!-- <div
            class="sidebar-backdrop"
            @click="closeSidebarPanel"
            v-if="isPanelOpen"
    ></div>-->
    <transition name="slide">
      <div v-if="isNavOpen" class="sidebar-panel">
        <button class="btn d-none exit" @click="toggleNav">X</button>
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

              <font-awesome-icon icon="eye" class="ml-2" />
              مشاهدة المتجر

            </a>
            <a href="#" role="button">
              <font-awesome-icon icon="pen" class="ml-2" />
              تخصيص الواجهة

            </a>
          </div>
        </div>
        <div class="nav-wrapper">
          <router-link to="/" tag="a" exact> <font-awesome-icon icon="home" class="ml-2"/>الرئيسية </router-link>
          <router-link to="/reports" tag="a"> <font-awesome-icon icon="chart-pie" class="ml-2" /> التقارير</router-link>
          <router-link to="/orders" tag="a"><font-awesome-icon icon="shopping-basket" class="ml-2"/> الطلبات</router-link>
          <router-link to="" tag="a"><font-awesome-icon icon="cubes" class="ml-2"/> المنتجات</router-link>
          <router-link to tag="a"><font-awesome-icon icon="globe" class="ml-2"/> التسويق</router-link>
          <router-link to tag="a"><font-awesome-icon icon="user-tag" class="ml-2"/>العملاء</router-link>
          <router-link to tag="a"><font-awesome-icon icon="object-group" class="ml-2"/>منظومة زد</router-link>
          <router-link to tag="a"><font-awesome-icon icon="users" class="ml-2"/>فريق العمل</router-link>
          <router-link to tag="a"><font-awesome-icon icon="cog" class="ml-2"/>الاعدادات</router-link>
          <router-link to tag="a"><font-awesome-icon icon="object-group" class="ml-2"/>خيارات الواجهة</router-link>

          <a role="button"> <span class="night-mode-toggler ml-2"><i></i></span>واجهة ليلية</a>
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
.sidebar{
  min-height: 100%;
  background-color: #362340;
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
.night-mode-toggler{
  border: 1px solid #ffffff;
  width: 10px;
  padding:0 10px;
  font-size: 0;
}
.sidebar-panel {

  background-color: #362340;
  right: 0;
  top: 0;

  z-index: 99999 !important;
  font-weight: 500;
  width: 250px;
  text-align: right;
  color: aliceblue;
  padding-bottom:80px ;
  overflow-y: auto;
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

@media screen and (max-width: 900px) {
  .sidebar-panel {
    position: fixed;
    height: 100%;
    z-index: 999;
  }

  .exit {
    display: inline-block !important;
    color: #fff;
    float: left;
    &:hover {
      color: #8d5da7;
    }
  }
}
</style>
