<template>
    <div class="bank-info mx-3 py-4">
        <span class="title">
            {{bankAccount.bankName}}
        </span>
        <div class="">
            <div class="d-flex flex-row align-items-center bank-detail" >
                <img :src="require(`@/assets/images/${bankAccount.img}`)" alt="" class="img-fluid ml-2" style="width: 70px ;height: 70px">
                <div class="mt-3 text-secondary">
                    <p class="m-0"><span class="font-weight-bold ">المالك:</span>{{bankAccount.owner}}</p>
                    <p class="m-0"><span class="font-weight-bold">رقم الحساب:</span>{{bankAccount.accountNum}}</p>
                    <p class=""><span class="font-weight-bold">الايبان:</span>{{bankAccount.iPan}}</p>
                </div>
            </div>

        </div>
        <div class="d-flex flex-row">
            <i class=""></i>
            <i></i>
        </div>
    </div>
</template>

<script>
    export default {
        name:"BankAccount",
        props:['bankAccount']
    }
</script>
<style scoped lang="scss">
    .bank-info{
        font-size: 14px;
        border-bottom: 1px solid #5b4665;
        padding-bottom: 30px;
        .title{
            font-weight: 700;
            color: #5b4665;
        }
    }
</style>
