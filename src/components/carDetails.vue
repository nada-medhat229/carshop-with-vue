<template>
  <div class="carDetails">
    <div class="container">
      <div class="row justify-content-evenly">
        <div class="col-8">
          <div class="">
            <img
              v-if="
                mainImageIs.length < 1
                  ? (mainImageIs = `${getcarinfo.img_url}`)
                  : mainImageIs
              "
              :src="mainImageIs"
              class="main-img rounded d-block mx-auto"
            />
          </div>
          <div class="justify-content-center row">
            <img
              v-for="(eachimage, i) in getcarinfo.array_images"
              :src="`${eachimage}`"
              @click="mainImageIs = `${eachimage}`"
              :key="i"
              class="all-img rounded mx-auto d-block"
            />
          </div>
        </div>
        <div class="col-4">
          <h3 class="carName py-2">Car Name || {{ getcarinfo.name }}</h3>

          <p class="py-2">
            Horse Power : {{ Math.ceil(getcarinfo.avg_horsepower) }}
          </p>
          <p class="price py-2">
            Price : {{ Math.ceil(getcarinfo.avg_price) }}
          </p>
          <blockquote>Description : {{ getcarinfo.description }}</blockquote>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import carsdetail from "@/json/cars.json";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "carDetails",
  data() {
    return {
      infodetail: carsdetail,
      carName: this.$route.params.carName,
      //   carfileid: this.$route.params.carfileid,
      maxcarid: this.$route.params.maxcarid,
      mainImageIs: "",
    };
  },
  methods: {
    // getimageurl(imageSrc) {
    //   let image = require.context("@/assets/");
    //   return image("./" + imageSrc);
    // },
  },
  computed: {
    // getcarinfo() {
    //   let carData = [];
    //   for (let i = 0; i < this.infodetail.length; i++) {
    //     if (this.infodetail[i].name == this.carName) {
    //       carData.push(this.infodetail[i]);
    //     }
    //   }
    //   return carData;
    // },
    getcarinfo() {
      let carData = "";
      for (let i = 0; i < this.infodetail.length; i++) {
        if (this.infodetail[i].max_car_id == this.maxcarid) {
          carData = this.infodetail[i];
          break;
        }
      }
      return carData;
    },
  },
};
</script>
<style scoped lang="scss">
.main-img {
  width: 650px;
  height: 450px;
  margin-bottom: 5px;
}
.all-img {
  width: 150px;
  border: 1px solid rgba(116, 114, 114, 0.323);
  padding: 0;
}
</style>
