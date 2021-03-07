<template>
  <div>
    <div
      class="px-2 py-1 rounded"
      :class="{
        'ring-2 ring-blue-400': severity === 'info',
        'ring-2 ring-amber-600': severity === 'warning',
        'ring-2 ring-red-500': severity === 'danger',
      }"
    >
      <div class="flex items-center space-x-2">
        <div>
          <FontAwesomeIcon
            class="h-6 w-6 animate-pulse text-black dark:text-true-gray-300"
            :icon="['fas', getIcon]"
          ></FontAwesomeIcon>
        </div>
        <div
          class="font-semibold underline uppercase"
          :class="{
            'text-blue-400 ': severity === 'info',
            'text-amber-600': severity === 'warning',
            'text-red-500 ': severity === 'danger',
          }"
        >
          {{ severity }}
        </div>
      </div>
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    severity: {
      type: String,
      default: 'info',
    },
  },
  computed: {
    getIcon() {
      if (this.severity === 'info') {
        return 'lightbulb'
      } else if (this.severity === 'warning') {
        return 'radiation'
      } else {
        return 'skull'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  p {
    @apply mt-1;
  }
}
</style>
