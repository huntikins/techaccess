<template>
  <div class="pa-5">
    <v-row>
      <v-col :md="2" :sm-="12" :offset-md="1">
        <v-card class="mx-auto" max-width="344" to="/appointment" hover>
          <v-img
            src="https://www.kclibrary.org/sites/default/files/Appointment800x414.png"
            contain
          ></v-img>
        </v-card>
        <v-card
          class="mx-auto mt-5"
          max-width="344"
          href="https://www.kclibrary.org/clubs-activities?keys=tech&field_location_target_id=All&term_node_tid_depth_2=3523&page=1"
          hover
        >
          <v-img
            src="https://www.kclibrary.org/sites/default/files/FindTechCoach800x414.png"
            contain
          ></v-img>
        </v-card>
        <v-card
          class="mx-auto mt-5"
          max-width="344"
          href="https://www.projectoutcome.org/responses/18137"
          hover
        >
          <v-img
            src="https://cms.kclibrary.org/storage/uploads/2020/01/29/5e3204aeb8510TechCoachFeedback.png"
            contain
          ></v-img>
        </v-card>
      </v-col>
      <template v-for="resource in resources">
        <v-col :md="2" :sm="12" :key="resource._id">
          <v-card class="mx-auto" max-width="344" hover>
            <v-img :src="img_base_url + resource.image.path" contain></v-img>
            <v-card-title v-html="resource.heading"> </v-card-title>
            <v-card-subtitle v-html="resource.text"> </v-card-subtitle>
            <v-card-actions>
              <v-btn color="green" block :href="resource.url">
                {{ resource.title }}
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
      </template>
    </v-row>
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
    const { data } = await app.$axios.post(
      process.env.LEARNING,
      JSON.stringify({}),
      {
        headers: { "Content-Type": "application/json" }
      }
    );
    const embed = await app.$axios.post(
      process.env.VIDEOS,
      JSON.stringify({}),
      {
        headers: { "Content-Type": "application/json" }
      }
    );
    console.log(embed);
    return {
      img_base_url: process.env.IMG_URL,
      resources: data.entries,
      videos: embed.data.entries
    };
  }
};
</script>
