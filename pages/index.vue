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
            <v-col :md="5" :sm="12">
              <v-img :src="hero" contain class="mx-auto" width="100%"></v-img>
            </v-col>
            <v-col :md="7" :sm="12" class="ma-auto">
              <v-card-text
                class="text-center headline white--text"
                v-html="heading"
              ></v-card-text>
            </v-col>
          </v-row>
          <v-row class="px-4">
            <v-col :md="4" :sm="12">
              <v-card
                class="mx-auto"
                v-ripple
                nuxt="true"
                to="/resources"
                hover="true"
              >
                <v-img :src="resourcesURL" contain alt="Find Resources"></v-img>
                <v-card-subtitle
                  class="text-center white--text"
                  v-html="resourcesText"
                ></v-card-subtitle>
              </v-card>
            </v-col>
            <v-col :md="4" :sm="12">
              <v-card
                class="mx-auto"
                v-ripple
                nuxt="true"
                to="/volunteer"
                hover="true"
              >
                <v-img :src="volunteerURL" contain alt="Volunteer"></v-img>
                <v-card-subtitle
                  class="text-center white--text"
                  v-html="volunteerText"
                ></v-card-subtitle>
              </v-card>
            </v-col>
            <v-col :md="4" :sm="12">
              <v-card
                class="mx-auto"
                v-ripple
                nuxt="true"
                to="/partner"
                hover="true"
              >
                <v-img :src="partnerURL" contain alt="Partner"></v-img>
                <v-card-subtitle
                  class="text-center white--text"
                  v-html="partnerText"
                ></v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ app }) {
    const { data } = await app.$axios.post(
      process.env.FRONTPAGE,
      JSON.stringify({}),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      }
    );
    return {
      volunteerURL: process.env.IMG_URL + data.volunteer_img.path,
      volunteerText: data.volunteer_text,
      resourcesURL: process.env.IMG_URL + data.resources_img.path,
      resourcesText: data.resources_text,
      partnerURL: process.env.IMG_URL + data.partner_img.path,
      partnerText: data.partner_text,
      heading: data.heading,
      hero: process.env.IMG_URL + data.hero.path,
      showAlert: data.alert_enable,
      alertText: data.alert_message
    };
  }
};
</script>
