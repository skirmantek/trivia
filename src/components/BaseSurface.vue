<template>
<div
class="classBck">
<slot />
</div>
</template>

<script>
export default {
  name: 'BaseSurface'
}
</script>

<style scoped>

.classBck {
  display:flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 1em;
  width: 300px;
  min-height: 400px;
  margin-top: 50px;
  margin-bottom: 50px;
  padding:20px
}
</style>
