<template>
  <v-container>
    <v-row column justify-center align-center>
      <v-col :md="8" :offset-md="2" :sm="12" :offset-sm="0" :offset-xs="0" :xs="12">
        <v-card class="transparent" flat dark="true">
          <v-row class="px-4">
            <v-col :md="5" :sm="12">
              <v-img :src="hero" contain class="mx-auto" width="100%"></v-img>
            </v-col>
            <v-col :md="7" :sm="12" class="ma-auto">
              <v-card-text class="text-center headline white--text" v-html="heading"></v-card-text>
            </v-col>
          </v-row>
          <v-row class="px-4">
            <v-col :md="4" :sm="12">
              <v-card class="mx-auto" v-ripple nuxt="true" to="/resources" hover="true">
                <v-img :src="resourcesURL" contain alt="Find Resources"></v-img>
                <v-card-subtitle class="text-center white--text" v-html="resourcesText"></v-card-subtitle>
              </v-card>
            </v-col>
            <v-col :md="4" :sm="12">
              <v-card class="mx-auto" v-ripple nuxt="true" to="/volunteer" hover="true">
                <v-img :src="volunteerURL" contain alt="Volunteer"></v-img>
                <v-card-subtitle class="text-center white--text" v-html="volunteerText"></v-card-subtitle>
              </v-card>
            </v-col>
            <v-col :md="4" :sm="12">
              <v-card class="mx-auto" v-ripple nuxt="true" to="/partner" hover="true">
                <v-img :src="partnerURL" contain alt="Partner"></v-img>
                <v-card-subtitle class="text-center white--text" v-html="partnerText"></v-card-subtitle>
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
    const hero = await app.$axios.post(
      process.env.FRONTPAGE_HERO,
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
      heading: heading.data.content,
      hero: process.env.IMG_URL + hero.data.image.path
    };
  }
};
</script>
