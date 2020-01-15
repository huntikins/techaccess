<template>
  <v-container>
    <v-row>
      <v-col :md="8" :offset-md="2" :sm="12">
        <h1
          class="text-center"
          v-html="heading"
          style="word-break: normal;"
        ></h1>
      </v-col>
    </v-row>
    <v-row>
      <template v-for="section in sections">
        <v-col :md="4" :sm="12" class="col-12" :key="section.heading">
          <v-card hover>
            <v-card-title v-html="section.heading"></v-card-title>
            <v-card-text v-html="section.text"></v-card-text>
          </v-card>
        </v-col>
      </template>
    </v-row>
    <v-row>
      <v-col :md="4" :sm="12" :offset-md="4">
        <v-btn to="/partner/form" block color="secondary">
          Become A Partner
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    alert: true
  }),
  async asyncData({ app }) {
    const { data } = await app.$axios.post(
      process.env.PARTNERPAGE,
      JSON.stringify({}),
      {
        headers: { "Content-Type": "application/json" }
      }
    );
    return {
      heading: data.heading,
      hero: process.env.IMG_URL + data.hero.path,
      sections: [
        { heading: data.section_1_heading, text: data.section_1_text },
        { heading: data.section_2_heading, text: data.section_2_text },
        { heading: data.section_3_heading, text: data.section_3_text }
      ]
    };
  }
};
</script>
