<template>
  <div class="pa-5">
    <v-card class="pa-4 mt-4" flat>
      <h1 class="text-center">Video Resources</h1>
      <v-row>
        <template v-for="video in videos">
          <v-col :md="3" :sm="12" class="col-12" :key="video.url">
            <v-card hover height="300">
              <iframe
                width="100%"
                height="300"
                :src="video.url"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </v-card>
          </v-col>
        </template>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({}),
  async asyncData({ app }) {
    const embed = await app.$axios.post(
      process.env.VIDEOS,
      JSON.stringify({}),
      {
        headers: { "Content-Type": "application/json" }
      }
    );
    return {
      videos: embed.data.entries
    };
  }
};
</script>
