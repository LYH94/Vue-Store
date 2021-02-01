<template>
  <b-container id="sidebar" class="p-0" >
    <b-nav class="sidebar pt-3" vertical>
      <b-nav-item to="/dashboard"><font-awesome-icon class="mr-2" :icon="['far', 'user-circle']"></font-awesome-icon>後台管理員</b-nav-item>
      <b-nav-item to="/products"><font-awesome-icon class="mr-2" :icon="['far', 'edit']"></font-awesome-icon>商品管理</b-nav-item>
      <b-nav-item to="/dashboard/orders"><font-awesome-icon class="mr-2" :icon="['fas', 'list-alt']"></font-awesome-icon>訂單管理</b-nav-item>
    </b-nav>
  </b-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
