<template>
  <div class="CategoryPage">
    <div class="container">
      <Category />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Category from "@/components/Category.vue";
export default {
  name: "CategoryPage",
  components: {
    Category,
  },
};
</script>
