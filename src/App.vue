<template>
  <div id="app">
    <h1>Named Views</h1>
    <router-view class="header" name="header"></router-view>
    <router-view class="timeline" name="timeline"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
