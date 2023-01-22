<template>
  <div class="Category container">
    <div class="row">
      <div class="col-2">
        <Sidebar :cars="mycar" />
      </div>
      <div class="col-10">
        <Car :cars="mycar" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from "@/components/Sidebar.vue";
import Car from "@/components/Cars.vue";
import carsjson from "@/json/cars.json";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Category",
  data() {
    return {
      mycar: carsjson,
    };
  },
  components: {
    Sidebar,
    Car,
  },
};
</script>
<style scoped lang="scss">
.category {
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
