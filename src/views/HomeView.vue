<template>
  <div>
    <div class="home">
      <img src="@/assets/about.jpeg" alt="" />
      <div class="content">
        <div class="paragraph">
          <h3 class="">A car or automobile is a motor vehicle with wheels</h3>
          <p>
            Most definitions of cars say that they run primarily on roads, seat
            one to eight people, have four wheels, and mainly transport people
            instead of goods
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <About />
      <ContactUS class="pb-5" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import carsjson from "@/json/cars.json";
import About from "@/components/About.vue";
import ContactUS from "@/components/ContactUS.vue";
export default {
  name: "HomeView",
  data() {
    return {
      mycar: carsjson,
    };
  },
  components: {
    About,
    ContactUS,
  },
};
</script>
<style scoped lang="scss">
.home {
  position: relative;
  margin-bottom: 50px;
  height: 100vh;
  min-height: 50vh;
  img {
    width: 100%;
    height: 100%;
  }
  .content {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    padding: 10%;
    text-align: center;
    background: rgba(0, 0, 0, 0.41);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }
  h3 {
    color: #ff5900e3;
    line-height: 1.9;
    font-size: 22px;
    font-weight: 700;
  }
  .paragraph {
    width: 70%;
    margin: auto;
    color: #a39693;
    line-height: 1.9;
    background: #fff;
    border-radius: 20px;
    padding: 10px;
  }
}
</style>
