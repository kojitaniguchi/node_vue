<template>
  <div id="app">
    <h1>Named Views</h1>
    <ul>
      <li>
        <router-link to="/">/</router-link>
      </li>
      <li>
        <router-link to="/other">/other</router-link>
      </li>
    </ul>
    <router-view class="header" name="header"></router-view>
    <router-view class="timeline" name="timeline"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
