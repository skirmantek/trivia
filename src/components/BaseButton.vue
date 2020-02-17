<template>
<button
  :class="classList"
  @click="onClick"
>
  <slot />
</button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    primary: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList () {
      return [
        'button'
      ]
    }
  },
  methods: {
    onClick (event) {
      if (!this.disabled) {
        this.$emit('click', event)
      }
    }
  }
}
</script>

<style scoped>
button{
  background-color: #fff;
  border: 1px solid gray;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-family: 'Comfortaa', cursive;
  border-radius: 10em;
  margin:5px;
  width: 250px

}
</style>
