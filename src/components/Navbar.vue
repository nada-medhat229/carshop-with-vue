<template>
  <div>
    <div class="navlist">
      <div class="all-nav container py-2">
        <router-link :to="{ name: 'Home' }" exact>
          <img src="../assets/logo.png" alt="logo" class="logo"
        /></router-link>

        <ul class="nav">
          <router-link :to="{ name: 'Home' }" tag="li" exact> Home</router-link>
          <router-link :to="{ name: 'About' }" tag="li"> About</router-link>
          <router-link :to="{ name: 'Category' }" tag="li">
            Category</router-link
          >
          <router-link :to="{ name: 'Contact' }" tag="li"> Contact</router-link>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
};
</script>
<style scoped lang="scss">
.navlist {
  background: #fff;
}
.all-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    width: 70px;
  }
}
.nav {
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 15px 0;
  li {
    padding: 5px;
    cursor: pointer;
    color: #293036;
  }
}
.router-link-exact-active {
  color: #ff8300 !important;
  font-weight: bold;
}
</style>
