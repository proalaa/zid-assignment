<template>
  <div>
    <div class="card">
      <div class="card-header">
        <div class="card-title">{{title}}</div>
        <button class="btn btn-success" v-if="buttonText" data-toggle="modal" :data-target="modId">{{buttonText}}</button>
      </div>
      <div class="card-body">
        <slot></slot>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StanCard",

  props: ["title","hasButton","buttonText","modalTarget"],
  computed:{
    modId:function () {
      return "#" + this.modalTarget;
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 10px;
  max-width: 1200px;
  margin: auto;
}
.card-header {
  background-color: #ffffff;
  .card-title {
    color: #57c292;
    font-weight: bold;
    position: relative;

  }
  button{
    position: absolute;
    left: 10px;
    top: 10px;
  }
}
</style>