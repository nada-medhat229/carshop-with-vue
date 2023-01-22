<template>
  <div class="Car row justify-content-evenly">
    <div class="col-4 each-car" v-for="(eachcar, i) in carinfo" :key="i">
      <div class="px-4 w-100 h-100 border">
        <img :src="`${eachcar.img_url}`" class="rounded" alt="" />
        <h4 class="pt-3">{{ eachcar.name }}</h4>
        <div>
          <div class="float-start">{{ Math.ceil(eachcar.avg_price) }}</div>
          <div class="float-end">
            <router-link
              :to="{
                name: 'carDetails',
                params: {
                  carName: eachcar.name,
                  carfileid: eachcar.id,
                  maxcarid: eachcar.max_car_id,
                },
              }"
              tag="button"
              class="btn"
            >
              More Details</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Car",
  data() {
    return {
      carinfo: this.$attrs.cars,
    };
  },
};
</script>
<style scoped lang="scss">
.Car {
  text-transform: capitalize;
  button {
    background-color: #ff8300;
    color: #fff;
  }
}
.each-car {
  padding-bottom: 5px;
  img {
    width: 100%;
    height: 60%;
  }
}
</style>
