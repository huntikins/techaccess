<template>
  <div class="pa-5">
    <div class="text-gray-600 font-bold text-sm tracking-wide">
      <v-chip
        v-for="(tag, key) in post.tags"
        :key="key"
        :href="'/category/' + tag"
        class="ml-1"
        color="secondary"
        >{{ tag }}</v-chip
      >
    </div>
    <h1 class="mt-2 display-2">{{ post.title }}</h1>
    <v-subheader class="ml-0 pl-0"
      >{{ post.date }} - By: {{ post.author }}</v-subheader
    >
    <v-divider></v-divider>
    <div
      class="mt-4 markdown"
      v-html="$options.filters.parseMd(post.excerpt + '\n' + post.content)"
    ></div>
  </div>
</template>
<script>
export default {
  async asyncData({ app, params, error, payload }) {
    if (payload) {
      return { post: payload };
    } else {
      let { data } = await app.$axios.post(
        process.env.POSTS_URL,
        JSON.stringify({
          filter: { published: true, title_slug: params.title_slug },
          sort: { _created: -1 },
          populate: 1
        }),
        {
          headers: { "Content-Type": "application/json" }
        }
      );

      if (!data.entries[0]) {
        return error({ message: "404 Page not found", statusCode: 404 });
      }

      return { post: data.entries[0] };
    }
  }
};
</script>
