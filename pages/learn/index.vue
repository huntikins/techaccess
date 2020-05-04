<template>
  <div class="pa-5">
    <v-row>
      <v-card class="pa-4 mt-4" flat>
        <h1 class="text-center">Create Your Own Path</h1>
        <v-col :md="4" :sm="12">
          <v-card class="mx-auto" max-width="344" to="/appointment" hover>
            <v-img
              src="https://cms.kclibrary.org/storage/uploads/2020/02/12/5e44696768dfe3.png"
              contain
            ></v-img>
          </v-card>
        </v-col>
        <v-col :md="4" :sm="12">
          <v-card
            class="mx-auto mt-5"
            max-width="344"
            href="https://www.kclibrary.org/clubs-activities?keys=tech&field_location_target_id=All&term_node_tid_depth_2=3523&page=1"
            hover
          >
            <v-img
              src="https://cms.kclibrary.org/storage/uploads/2020/02/12/5e446967b9be64.png"
              contain
            ></v-img>
          </v-card>
        </v-col>
        <v-col :md="4" :sm="12">
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
      </v-card>
    </v-row>
    <v-row>
      <v-card class="pa-4 mt-4" flat>
        <h1 class="text-center">Let Us Help You</h1>
        <template v-for="resource in resources">
          <v-col :md="4" :sm="12" :key="resource._id">
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
      </v-card>
    </v-row>
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
    return {
      img_base_url: process.env.IMG_URL,
      resources: data.entries
    };
  }
};
</script>
