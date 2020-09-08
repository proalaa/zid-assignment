<template>
  <div class="text-center">
    <stan-card title="بوابات الدفع">
      <div class="row pay-gates justify-content-around">
        <div class="col-md-6">
          <pay-gate best=true></pay-gate>
        </div>
        <div class="col-md-6">
          <pay-gate></pay-gate>
        </div>
        <div class="col-12 text-center">
          <img
            src="@/assets/images/apple-pay-logo.svg"
            alt="apple-pay"
            class="img-fluid"
            style="width:70px"
          />
          <span class="mx-3">يمكنك الان تفعيل Apple Pay في متجرك</span>
          <button class="btn btn-md btn-success">اضغط لمعرفة المزيد</button>
        </div>
      </div>
    </stan-card>
    <stan-card title="التحويلات البنكية"  buttonText="إضافة حساب جديد" class="mt-5" modalTarget="add-bank">
      <div v-bind:key="ba.id" v-for="ba in bankAccounts">
      <bank-account v-bind:bankAccount="ba" />

      </div>
    </stan-card>
    <modal name="add-bank" title="أضافة حساب بنكي">
      <form @submit="addAccount">
        <div class="row">
          <div class="form-group col-md-6">
            <label for="bank-name" class="font-weight-bold">اسم البنك</label>
            <input type="text" v-model="accTemp.bankName" id="bank-name" class="form-control" placeholder="ادخل اسم البنك" >
          </div>
          <div class="form-group col-md-6">
            <label for="num" class="font-weight-bold">رقم الحساب</label>
            <input type="text" v-model="accTemp.accountNum" id="num" class="form-control" placeholder="123456789XXXXXX" >
          </div>
          <div class="form-group col-md-6">
            <label for="ipan" class="font-weight-bold">الايبان</label>
            <input type="text" id="ipan" v-model="accTemp.iPan" class="form-control" placeholder="اSA03 8000 0000 6080 XXXX XXXX" >
          </div>
          <div class="form-group col-md-6">
            <label for="owner"  class="font-weight-bold">اسم المستفيد</label>
            <input type="text" v-model="accTemp.owner" id="owner" class="form-control" placeholder="اAccount Owner" >
          </div>
        </div>
        <div class="modal-footer text-center mx-auto">
          <input role="button" type="submit" class="btn btn-success" value="حفظ" >
          <button type="button" class="btn btn-secondary" data-dismiss="modal">إغلاق</button>
        </div>
      </form>
    </modal>
  </div>
</template>

<script>
import StanCard from "@/components/global/cards/StanCard";
import PayGate from "@/components/payment-option/PayGate";
import Modal from "@/components/global/Modal";
import BankAccount from "@/components/payment-option/BankAccount";
import { uuid } from 'vue-uuid';
export default {
  name:'Home',
  data(){
    return{
      bankAccounts:[
        {
          id:uuid.v1(),
          bankName:'بنك الراجحي',
          accountNum:'123456789012345',
          iPan:'SA1234567890123456789011',
          img:"al-rajhi.png",
          owner:'محمد سامي'
        },
        {
          id:uuid.v1(),
          bankName:'البنك الاهلي التجاري',
          accountNum:'123457889',
          iPan:'SA98002876190018718901',
          img: 'bank_ahli.png',
          owner:'فلان الفلاني'
        }
      ],
      accTemp:{
        id:'',
        bankName:'',
        accountNum:'',
        iPan:'',
        img: '',
        owner:''

      }
    }
  },
  methods:{
    addAccount(e){
      e.preventDefault();
      const new_account ={
        id:uuid.v1(),
        bankName:this.accTemp.bankName,
        accountNum:this.accTemp.accountNum,
        iPan:this.accTemp.iPan,
        img: this.accTemp.img,
        owner: this.accTemp.owner
      }
      this.bankAccounts = [...this.bankAccounts , new_account];
    }

  },
  components: {
    StanCard,
    PayGate,
    Modal,
    BankAccount
  }
};
</script>

<style lang="scss" scoped>
.pay-gates {
  padding: 10px;
}
</style>