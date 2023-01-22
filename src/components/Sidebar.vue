<template>
  <div class="sidebar">
    <ul>
      <router-link
        tag="li"
        v-for="(carEachType, i) in CarType"
        :key="i"
        :to="{ name: 'EachCar', params: { CarType: carEachType.name } }"
      >
        {{ carEachType.name }}</router-link
      >
    </ul>
  </div>
</template>
<script>
import CarType from "@/json/CarType.json";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Sidebar",
  data() {
    return {
      CarType: CarType,
    };
  },
};
</script>
<style scoped lang="scss">
ul {
  padding: 0;
  li {
    width: 100%;
    list-style: none;
    background: #ff8300;
    cursor: pointer;
    margin: 5px;
    padding: 10px;
    color: #fff;
    border-radius: 2px;
    text-transform: capitalize;
  }
}
</style>
