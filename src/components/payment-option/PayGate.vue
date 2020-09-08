<template>
  <div class="gate">
    <div class="right-content float-right">
      <h5 class>اسم البوابة</h5>
      <p>من هنا يمكنك تفعيل بوابات أخرى</p>
      <a href role class="btn">اضغط للمزيد من التفاصيل</a>
    </div>
    <div class="left-content float-left">
      <img src alt class="img-fluid" />
    </div>
    <span class="best-choice" v-if="best">الاختيار المفضل</span>
  </div>
</template>

<script>
export default {
  props:["best"]
};
</script>

<style lang="scss" scoped>
.gate {
  border: 1px solid #e5e5e5;
  position: relative;
  display: inline-block;

  background-color: #fff;
  border-radius: 5px;
  padding: 22px 30px;
  width: 100%;
  min-height: 140px;
  transition: all 0.3s ease;
  margin-bottom: 30px;
  .right-content {
    h5 {
      color: #8d5da7;
      font-size: 14px;
      font-weight: 700;
    }
    p {
      font-size: 12px;
      color: #635972;
      margin-bottom: 1.4rem;
    }
    a.btn {
      color: #ffffff;
      background-color: #8d5da7;
      padding: 3px 15px;
      &:hover {
        background-color: #8d51ad;
      }
    }
  }
  .best-choice {
    position: absolute;
    background-color: rgba(176, 129, 201, 0.25);
    color: #8c5da7;
    font-size: 12px;
    font-weight: 700;
    padding: 3px 8px;
    border-radius: 5px;
    top: 10px;
    left: 10px;
  }
}
</style>