<template>
  <div
    class="my-10 flex flex-col space-y-2 sm:space-y-5 border-2 border-opacity-5`0 text-black border-warm-gray-800 px-3 sm:px-5 py-3 rounded-xl dark:bg-true-gray-200"
  >
    <div class="tracking-wide sm:text-xl">
      <span class="font-bold">Quick review:</span>
      <span>{{ question }}</span>
    </div>
    <div class="flex flex-col space-y-2">
      <div
        v-for="(option, index) in options"
        :id="`option-${index}`"
        :key="index"
        ref="choices"
        class="border px-2 py-1 border-purple-900 choice focus:outline-none cursor-pointer rounded-md"
        :class="{ active: activeOption === index }"
        @click="markOption(index)"
      >
        {{ option }}
      </div>
    </div>
    <button
      :disabled="activeOption === null"
      class="bg-gray-900 text-gray-100 px-6 py-1 rounded-lg disabled:opacity-60 transition duration-300 focus:outline-none focus:bg-warm-gray-700"
      @click="evaluateAnswer()"
    >
      Submit
    </button>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    correct: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      activeOption: null,
    }
  },
  methods: {
    markOption(index) {
      this.activeOption = index
    },
    evaluateAnswer() {
      const selected = this.$refs.choices[this.activeOption]
      if (this.activeOption === this.correct) {
        selected.classList.add('correct-option')
      } else {
        selected.classList.add('incorrect-option')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.choice {
  transition-duration: 1s;
  transition-property: background-color;

  &.active.correct-option {
    @apply bg-green-300 ring-0;
  }

  &.active.incorrect-option {
    @apply bg-red-300 ring-0;
  }

  &.active {
    @apply ring-4 ring-indigo-400 border-black;
  }
}
</style>
