<template>
  <div class="w-full dark:bg-true-gray-800 bg-true-gray-200">
    <div class="px-3 container mx-auto">
      <div>
        <div>
          {{ article.title }}
        </div>
        <div>
          {{ $dayjs(article.createdAt).format('MMMM DD, YYYY') }}
        </div>
      </div>
      <article
        class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto pb-20 pt-8"
      >
        <NuxtContent :document="article"></NuxtContent>
      </article>
    </div>
  </div>
</template>

<script>
import BlogQuestion from '~/components/BlogQuestion'
import BlogAlert from '~/components/BlogAlert'

export default {
  components: {
    /* eslint-disable vue/no-unused-components */
    BlogQuestion,
    BlogAlert,
    /* eslint-enable */
  },
  async asyncData({ $content, params, error }) {
    const article = await $content('blog', params.pathMatch)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'This blog does not exist' })
      })
    return { article }
  },
  head() {
    return {
      title: this.article.title,
    }
  },
}
</script>
