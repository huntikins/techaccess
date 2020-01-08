<template>
  <v-container>
    <v-row column justify-center align-center>
      <v-col :cols="auto">
        <div class="text-center">
          <logo />
        </div>
      </v-col>
    </v-row>
    <v-row column justify-center align-center>
      <v-col :md="8" :offset-md="2" :sm="12" :offset-sm="0" :offset-xs="0" :xs="12">
        <v-card class="transparent" flat light="true">
          <v-card-text class="text-center headline" v-html="heading"></v-card-text>
          <v-row class="px-4">
            <v-col :md="4" :sm="12">
              <v-card class="mx-auto" light="true" v-ripple nuxt="true" to="/resources">
                <v-img :src="resourcesURL" contain alt="Find Resources"></v-img>
                <v-card-text class="headline text-center" v-html="resourcesText"></v-card-text>
              </v-card>
            </v-col>
            <v-col :md="4" :sm="12">
              <v-card class="mx-auto" light="true" v-ripple nuxt="true" to="/volunteer">
                <v-img :src="volunteerURL" contain alt="Volunteer"></v-img>
                <v-card-text class="headline text-center" v-html="volunteerText"></v-card-text>
              </v-card>
            </v-col>
            <v-col :md="4" :sm="12">
              <v-card class="mx-auto" light="true" v-ripple nuxt="true" to="/partner">
                <v-img :src="partnerURL" contain alt="Partner"></v-img>
                <v-card-text class="headline text-center" v-html="partnerText"></v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  async asyncData({ app }) {
    const volunteer = await app.$axios.post(
      process.env.FRONTPAGE_VOLUNTEER,
      JSON.stringify({}),
      {
        headers: { "Content-Type": "application/json" }
      }
    );
    const resource = await app.$axios.post(
      process.env.FRONTPAGE_RESOURCES,
      JSON.stringify({}),
      {
        headers: { "Content-Type": "application/json" }
      }
    );
    const partner = await app.$axios.post(
      process.env.FRONTPAGE_PARTNER,
      JSON.stringify({}),
      {
        headers: { "Content-Type": "application/json" }
      }
    );
    const heading = await app.$axios.post(
      process.env.FRONTPAGE_DESCRIPTION,
      JSON.stringify({}),
      {
        headers: { "Content-Type": "application/json" }
      }
    );
    return {
      volunteerURL: process.env.IMG_URL + volunteer.data.image.path,
      volunteerText: volunteer.data.content,
      resourcesURL: process.env.IMG_URL + resource.data.image.path,
      resourcesText: resource.data.content,
      partnerURL: process.env.IMG_URL + partner.data.image.path,
      partnerText: partner.data.content,
      heading: heading.data.content
    };
  }
};
</script>
