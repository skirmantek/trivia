<template>
<div class="countDown">
<div class="counter">
{{ countDown }}
<slot />
</div>
<svg>
    <circle r="18" cx="20" cy="20"></circle>
  </svg>
</div>
</template>

<script>
export default {
  name: 'BaseCounter',
  data () {
    return {
      countDown: 10
    }
  },
  created () {
    this.countDownTimer()
  },
  methods: {
    countDownTimer () {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1
          this.countDownTimer()
        }, 1000)
      }
    }
  }
}
</script>

<style>
.counter {
  font-family: 'Comfortaa', cursive;
  margin-top: 15px;
  margin-bottom: 25px;
  font-weight: bold

}

.countDown {
  position: relative;
  margin: auto;
  margin-top: 10px;
  height: 40px;
  width: 40px;
  text-align: center
}

svg {
  position: absolute;
  top: 0;
  right: 0;
  width: 45px;
  height: 45px;
  transform: rotateY(-180deg) rotateZ(-90deg);
}

svg circle {
  stroke-dasharray: 113px;
  stroke-dashoffset: 0px;
  stroke-linecap: round;
  stroke-width: 3px;
  stroke: #b839c4;
  fill: none;
  animation: countdown 10s linear forwards;
}

@keyframes countdown {
  from {
    stroke-dashoffset: 0px;
  }
  to {
    stroke-dashoffset: 113px;
  }
}
</style>
