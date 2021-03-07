<template>
  <div
    class="fixed inset-y-0 z-20 right-0 md:right-4 lg:right-8 xl:right-12 2xl:right-32 flex transition-transform duration-300"
    :class="{ 'transform translate-x-1/2 ': clicked }"
  >
    <div class="px-1 py-2 my-auto transition-transform duration-300">
      <div class="flex justify-end items-end">
        <div class="sm:hidden">
          <transition name="control" mode="out-in">
            <component
              :is="getMenuIcon"
              classes="h-6 w-6 sm:h-8 sm:w-8 cursor-pointer"
              @click.native="toggleMenu"
            ></component>
          </transition>
        </div>
        <div class="flex flex-col shadow-2xl space-y-2">
          <div v-for="(link, index) in links" :key="index">
            <NuxtLink :to="{ name: link.path }">
              <FontAwesomeIcon
                class="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
                :icon="link.icon"
              ></FontAwesomeIcon>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuIcon from '~/components/icons/Menu'
import CloseIcon from '~/components/icons/Close'

export default {
  components: {
    MenuIcon,
    CloseIcon,
  },
  data: () => ({
    clicked: true,
    links: [
      { path: 'index', icon: ['fas', 'home'] },
      { path: 'blog', icon: ['fas', 'pencil-alt'] },
    ],
  }),
  computed: {
    getMenuIcon() {
      return this.clicked ? 'MenuIcon' : 'CloseIcon'
    },
  },
  methods: {
    toggleMenu() {
      this.clicked = !this.clicked
    },
  },
}
</script>
