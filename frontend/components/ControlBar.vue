<template>
  <div
    class="fixed left-0 rounded-r-2xl px-1 py-2 shadow-2xl top-3/4 z-20 bg-red-600 transition-transform duration-300"
    :class="{ 'transform -translate-x-1/2 ': clicked }"
  >
    <div class="flex space-x-2">
      <transition name="control" mode="out-in">
        <component
          :is="getColorModeIcon"
          classes="h-6 w-6 sm:h-8 sm:w-8 cursor-pointer"
          @click.native="toggleColorMode"
        ></component>
      </transition>
      <transition name="control" mode="out-in">
        <component
          :is="getCollapseIcon"
          classes="h-6 w-6 sm:h-8 sm:w-8 cursor-pointer"
          @click.native="toggleCollapse"
        ></component>
      </transition>
    </div>
  </div>
</template>

<script>
import DarkModeIcon from '~/components/icons/DarkMode.vue'
import LightModeIcon from '~/components/icons/LightMode.vue'
import NavbarOpenIcon from '~/components/icons/NavbarOpen.vue'
import NavbarCloseIcon from '~/components/icons/NavbarClose.vue'

export default {
  components: {
    DarkModeIcon,
    LightModeIcon,
    NavbarOpenIcon,
    NavbarCloseIcon,
  },
  data: () => ({
    clicked: true,
  }),
  computed: {
    getColorModeIcon() {
      if (this.$colorMode.value === 'light') {
        return 'LightModeIcon'
      } else {
        return 'darkModeIcon'
      }
    },
    getCollapseIcon() {
      return this.clicked ? 'NavbarOpenIcon' : 'NavbarCloseIcon'
    },
  },
  methods: {
    toggleColorMode() {
      if (this.$colorMode.value === 'light') {
        this.$colorMode.preference = 'dark'
      } else {
        this.$colorMode.preference = 'light'
      }
    },
    toggleCollapse() {
      this.clicked = !this.clicked
    },
  },
}
</script>

<style scoped>
.control-enter-active,
.control-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity scale;
  transition-timing-function: ease-in-out;
}

.control-enter,
.control-leave-to {
  @apply opacity-0 scale-75 transform;
}
</style>
