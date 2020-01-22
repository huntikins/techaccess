<template>
  <div class="pa-5">
    <v-alert
      v-model="alert"
      prominent
      color="green"
      border="right"
      type="success"
      elevation="10"
      icon="mdi-alert-circle"
      dark="true"
      class="white--text"
    >
      New applications will be taken at the beginning of 2020.
    </v-alert>
    <v-row>
      <v-col :md="7" :sm="12">
        <v-row>
          <v-col :md="6" :sm="12">
            <v-img :src="hero" contain alt="Heading Image" class="pa-4" />
          </v-col>
          <v-col :md="6" :sm="12">
            <p class="pa-4" v-html="heading"></p>
          </v-col>
        </v-row>
      </v-col>
      <v-col :md="5" :sm="12">
        <v-row>
          <v-col :md="6" :sm="12" class="col-12">
            <v-card hover>
              <v-card-title
                primary-title
                v-html="session1Heading"
                class="text-center justify-center"
              >
              </v-card-title>
              <v-card-text v-html="session1Text"> </v-card-text>
            </v-card>
          </v-col>
          <v-col :md="6" :sm="12" class="col-12">
            <v-card hover>
              <v-card-title
                primary-title
                v-html="session2Heading"
                class="text-center justify-center"
              ></v-card-title>
              <v-card-text v-html="session2Text"> </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col :md="8" :sm="12" :offset-md="2">
        <v-row>
          <v-col :sm="12" :md="6">
            <h1 class="text-center">Qualifications</h1>
            <v-list class="px-2" v-html="qualifications"> </v-list>
          </v-col>
          <v-col :md="6" :sm="12">
            <h1 class="text-center">Benefits Provided</h1>
            <v-list class="px-2" v-html="benefits"> </v-list>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data: () => ({
    alert: true
  }),
  async asyncData({ app }) {
    const page = await app.$axios.post(
      process.env.LAUNCHCODE,
      JSON.stringify({}),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      }
    );
    return {
      session1Heading: page.data.session_1_heading,
      session1Text: page.data.session_1_text,
      session2Heading: page.data.session_2_heading,
      session2Text: page.data.session_2_text,
      locationHeading: page.data.location_heading,
      qualifications: page.data.qualifications,
      benefits: page.data.benefits,
      heading: page.data.heading,
      hero: process.env.IMG_URL + page.data.hero.path
    };
  }
};
</script>
