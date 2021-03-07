<template>
  <div>
    <div>Blog</div>
    <div v-for="file in files" :key="file.id">
      <div>
        <nuxt-link :to="file.path">
          <div>
            {{ file.title }}
          </div>
        </nuxt-link>
        <div>{{ file.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const files = await $content('blog', { deep: true }).fetch()
    return { files }
  },
  head: () => ({
    title: 'Blog',
  }),
}
</script>
