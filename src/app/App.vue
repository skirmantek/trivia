<template>
  <div id="app">

    <BaseSurface>
    <span v-if="isRequesting">Loading...</span>
<BaseCounter></BaseCounter>
<template v-if="currentQuestion && !isRequesting">
  <p class="category">
  {{currentQuestion.category}}
</p>
<p class="question">
  {{currentQuestion.question}}
  </p>
<ul>
  <li v-for='answer in currentAnswers' :key="answer">
    <BaseButton :primary="true" @click="next(answer)"> {{answer}} </BaseButton>
  </li>
</ul>
<p>Your points: {{ this.points}}</p>
</template>
</BaseSurface>
  </div>

</template>

<script>
import axios from '@/packages/axios'
import shuffle from 'lodash.shuffle'
import BaseButton from '@/components/BaseButton'
import BaseSurface from '@/components/BaseSurface'
import BaseCounter from '@/components/BaseCounter'

export default {
  name: 'App',
  components: {
    BaseButton,
    BaseSurface,
    BaseCounter
  },
  data () {
    return {
      currentIndex: 0,
      isRequesting: false,
      questions: [],
      points: 0
    }
  },
  computed: {
    currentQuestion () {
      if (this.questions.length) {
        return this.questions[this.currentIndex]
      }
      return null
    },
    currentAnswers () {
      const { currentQuestion } = this
      if (currentQuestion) {
        const answers = [
          ...currentQuestion.incorrect_answers,
          currentQuestion.correct_answer
        ]
        return shuffle(answers)
      }
      return []
    }
  },
  created () {
    this.fetchQuestions()
  },
  methods: {
    next (answer) {
      if (answer === this.currentQuestion.correct_answer) {
        this.points++
        this.fetchQuestions()
        alert(this.points)
      } else {
        alert(this.points)
        this.fetchQuestions()
        // location.reload()
      }
    },
    async fetchQuestions () {
      this.isRequesting = true
      try {
        const { data } = await axios.get('/api.php?amount=1')
        this.questions = data.results
        this.isRequesting = false
      } catch (error) {
        this.isRequesting = false
      }
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Comfortaa&display=swap');
#app{
  display:flex;
  justify-content: center
}
body {
  background-image: url("~@/images/bck.png");
  background-size:cover;
  background-repeat: no-repeat;
  min-width: 340px;
  height: auto
}
p {
  font-family: 'Comfortaa', cursive;
  padding: 10px 25px;
  text-align:center
}
.question{
  font-size: 16px;
  font-weight: bold

}
.category{
  font-size: 14px
}
ul{
  list-style: none;
  margin: 0;
  padding: 0
}
</style>
