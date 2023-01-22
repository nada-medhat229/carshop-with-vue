<template>
  <div class="container">
    <div class="EachCar row justify-content-evenly">
      <div
        class="col-4 each-car border h-100 p-4"
        v-for="(eachcar, i) in getcarinfo"
        :key="i"
      >
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
import carsjson from "@/json/cars.json";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "EachCar",
  data() {
    return {
      infodetail: carsjson,
      CarType: this.$route.params.CarType,
    };
  },
  computed: {
    getcarinfo() {
      let carData = [];
      for (let i = 0; i < this.infodetail.length; i++) {
        if (this.infodetail[i].name == this.CarType) {
          carData.push(this.infodetail[i]);
        }
      }
      return carData;
    },
  },
};
</script>
<style scoped lang="scss">
.EachCar {
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
