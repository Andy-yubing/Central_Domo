<template>
    <div>
      <div class="wbg_up">
        <div class="wbg update">
          <a href="javascript:;">
            <img src="../../images/update.png" alt="">
          </a>
        </div>
      </div>

    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss">
  .wbg_up{
    height: 600px;
  }
.update{
  width: 260px;
  height: 250px;
  a{
    img{
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
    img:hover{
      box-shadow: 10px 10px 5px #888888;;
    }
  }
}
</style>
