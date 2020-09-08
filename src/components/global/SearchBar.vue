<template>
    <div class="search-bar">
        <form action="">
            <input type="text" name="search" id="" class="form-control-lg rounded-pill position-relative " placeholder="ابحث هنا.... ">
            <font-awesome-icon icon="search" class="search-icon" />
        </form>
    </div>
</template>

<script>
    export default {
        name: "SearchBar"
    }
</script>

<style scoped>
    .search-bar{

    }
    form {
        position: relative;
    }
    input[type=text]
    {
        padding: 7px 18px;
        background-color: #F0F1F2;
        border: 0;
        border-radius: 50px;
        font-size: 13px;
        color: #697a8f;
        outline: none;
        padding: 7px 18px;
        padding-right: 40px;
        width: 100%;
        position: relative;
        transition: all 0.3s ease;
    }
    .search-icon{
        position: absolute;
        left: 10px;
        top: 12px;
        z-index: 9999;
    }


</style>