<template>
  <b-container fluid id="dashboard" class="d-flex flex-row">
    <div id="das-sidebar">
      <b-nav id="nav-sidebar" vertical class="h-100 py-3">
        <b-nav-item to="/dashboard/products"><font-awesome-icon class="mr-2" :icon="['far', 'edit']"></font-awesome-icon>商品管理</b-nav-item>
        <b-nav-item to="/dashboard/orders"><font-awesome-icon class="mr-2" :icon="['fas', 'bars']"></font-awesome-icon>訂單管理</b-nav-item>
      </b-nav>
    </div>
    <div id="das-content">
      <router-view></router-view>
    </div>
  </b-container>
</template>

<script>
export default {
}
</script>

<style>
  @media (max-width: 575.98px){
    #nav-sidebar{
      font-size: 1rem;
    }
  }

  @media (min-width: 992px){
    #dashboard {
      width: 90%;
    }

    #das-sidebar {
      width: 15%;
    }

    #das-content {
      width: 85%;
    }

    #nav-sidebar{
      font-size: 1.2rem;
    }
  }
</style>
