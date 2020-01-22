<template>
  <v-container>
    <v-alert
      v-model="showAlert"
      prominent
      color="green"
      border="right"
      type="success"
      elevation="10"
      icon="mdi-alert-circle"
      dark="true"
      class="white--text"
    >
      {{ alertText }}
    </v-alert>
    <h1 class="text-center">Become a Tech Coach</h1>
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
              <v-card-title primary-title v-html="session1Heading">
              </v-card-title>
              <v-card-text v-html="session1Text"> </v-card-text>
            </v-card>
          </v-col>
          <v-col :md="6" :sm="12" class="col-12">
            <v-card hover>
              <v-card-title
                primary-title
                v-html="session2Heading"
              ></v-card-title>
              <v-card-text v-html="session2Text"> </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col :md="6" :sm="12">
        <h1 class="text-center" v-html="locationHeading"></h1>
        <v-row>
          <template v-for="location in locations">
            <v-col :md="3" :sm="6" :key="location.name">
              <v-card hover :href="location.url" v-ripple :key="name">
                <v-card-title
                  class="justify-center text-center"
                  style="word-break: normal;"
                  >{{ location.name }}
                </v-card-title>
                <v-card-subtitle class="pt-2 mb-0 pb-0 text-center">{{
                  location.top_address
                }}</v-card-subtitle
                ><v-card-subtitle class="pt-0 mt-0 text-center">
                  {{ location.bottom_address }}</v-card-subtitle
                >
              </v-card>
            </v-col>
          </template>
        </v-row>
      </v-col>
      <v-col :md="6" :sm="12">
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
  </v-container>
</template>
<script>
export default {
  data: () => ({
    alert: true
  }),
  async asyncData({ app }) {
    const page = await app.$axios.post(
      process.env.TECHCOACH,
      JSON.stringify({}),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      }
    );
    const location = await app.$axios.post(
      process.env.LOCATIONS,
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
      hero: process.env.IMG_URL + page.data.hero.path,
      locations: location.data.entries,
      showAlert: page.data.alert_enable,
      alertText: page.data.alert_message
    };
  }
};
</script>
