<template>
    <div class="">

        <div class="modal fade bd-example-modal-lg" tabindex="-1" :id="name" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">-->
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title float-right" id="exampleModalLabel">{{title}}</h5>
                        <button type="button" class="close float-left" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <slot></slot>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "modal",
        data(){
            return{
            }
        },
        props:["name","title" ,"bankName","acc-id","Ipan","owner"],

    }
</script>

<style scoped>
    .modal-header{
        position: relative;
    }
.close{
    position: absolute;
    left: 0;
}
</style>