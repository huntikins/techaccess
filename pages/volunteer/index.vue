<template>
  <div class="pa-5">
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
    <v-row column justify-center align-center>
      <v-col
        :md="8"
        :offset-md="2"
        :sm="12"
        :offset-sm="0"
        :offset-xs="0"
        :xs="12"
      >
        <v-card class="transparent" flat dark="true">
          <v-row class="px-4">
            <v-col :md="7" :sm="12" class="ma-auto">
              <v-card-text
                class="headline white--text"
                v-html="heading"
              ></v-card-text>
            </v-col>
            <v-col :md="5" :sm="12">
              <v-img :src="hero" contain class="mx-auto" width="100%"></v-img>
            </v-col>
          </v-row>
          <v-row class="px-4">
            <v-col :md="4" :sm="12" :offset-md="1">
              <v-card
                class="mx-auto"
                v-ripple
                nuxt="true"
                to="volunteer/tech-coaching"
                hover="true"
              >
                <v-img :src="coachImg" contain alt="Tech Coach"></v-img>
                <v-card-title class="text-center" v-html="coachHeading">
                </v-card-title>
                <v-card-subtitle
                  class="white--text"
                  v-html="coachText"
                ></v-card-subtitle>
              </v-card>
            </v-col>
            <v-col :md="4" :sm="12" :offset-md="2">
              <v-card
                class="mx-auto"
                v-ripple
                nuxt="true"
                to="volunteer/launchcode"
                hover="true"
              >
                <v-img
                  :src="codeImg"
                  contain
                  alt="Launchcode's Discovery"
                ></v-img>
                <v-card-title class="text-center" v-html="codeHeading">
                </v-card-title>
                <v-card-subtitle
                  class=" white--text"
                  v-html="codeText"
                ></v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
        <v-btn
          width="50%"
          color="green"
          class="mt-10 mx-auto align-content-center d-flex"
          href="https://www.volgistics.com/ex/portal.dll/ap?ap=1433095633"
          >Apply Now</v-btn
        >
        <p>
          Already a volunteer?<a
            href="https://www.volgistics.com/ex2/vicnet.dll?from=289919"
          >
            Click here to login</a
          >
        </p>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data: () => ({}),
  async asyncData({ app }) {
    const { data } = await app.$axios.post(
      process.env.VOLUNTEERPAGE,
      JSON.stringify({}),
      {
        headers: { "Content-Type": "application/json" }
      }
    );
    return {
      coachHeading: data.coach_heading,
      coachImg: process.env.IMG_URL + data.coach_img.path,
      coachText: data.coach_text,
      codeHeading: data.code_heading,
      codeImg: process.env.IMG_URL + data.code_img.path,
      codeText: data.code_text,
      heading: data.heading,
      hero: process.env.IMG_URL + data.hero.path,
      showAlert: data.alert_enable,
      alertText: data.alert_message
    };
  }
};
</script>
