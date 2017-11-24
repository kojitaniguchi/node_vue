<template>
  <div class="top">
    <<router-view></router-view>
  </div>
</template>

<script>
import Header from './Header'
import TimeLine from './TimeLine'

export default {
  components: {
    Header,
    TimeLine
  }
}
</script>
