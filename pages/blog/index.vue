<template>
  <div class="pa-5">
    <v-row>
      <v-col :md="3" sm="6" v-for="(post, key) in posts" :key="key">
        <v-card :loading="loading" class="mx-auto my-12" max-width="374" hover>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title
                class="headline"
                :to="'/blog/' + post.title_slug"
                >{{ post.title }}</v-list-item-title
              >
              <v-list-item-subtitle>by {{ post.author }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-img
            :src="img_url + post.image.path"
            height="194"
            :to="'/blog/' + post.title_slug"
          ></v-img>

          <v-card-text v-html="post.excerpt"> </v-card-text>
          <v-card-actions>
            <v-btn color="secondary" :to="'/blog/' + post.title_slug">
              Read More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 1
  }),
  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    }
  },
  async asyncData({ app }) {
    const { data } = await app.$axios.post(
      process.env.POSTS_URL,
      JSON.stringify({
        filter: { published: true },
        sort: { _created: -1 },
        populate: 1
      }),
      {
        headers: { "Content-Type": "application/json" }
      }
    );
    return { posts: data.entries, img_url: process.env.IMG_URL };
  }
};
</script>
