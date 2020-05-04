<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-row class="px-4">
        <v-col :md="4" :offset-md="4" :sm="12">
          <v-img :src="hero" contain class="mx-auto" width="100%"></v-img>
        </v-col>
      </v-row>
      <v-card class="transparent" flat>
        <v-card-title
          class="headline text-center d-block pb-0 mb-0"
          v-html="heading"
          style="word-break: normal;"
        >
        </v-card-title>
        <v-card-text class="text-center pt-0 mt-0" v-html="subheading">
        </v-card-text>
        <v-row class="pa-4">
          <template v-for="value in iconblock">
            <v-col :md="3" :sm="6" :key="value.id">
              <v-card hover v-ripple class="pa-4">
                <v-img
                  width="50%"
                  contain
                  :src="value.icon"
                  class="mx-auto mt-4"
                ></v-img>
                <v-card-subtitle class="text-center white--text">{{
                  value.text
                }}</v-card-subtitle>
              </v-card>
            </v-col>
          </template>
        </v-row>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  async asyncData({ app }) {
    const { data } = await app.$axios.post(
      process.env.DIGITALSKILLSEEKER,
      JSON.stringify({}),
      {
        headers: { "Content-Type": "application/json" }
      }
    );

    let iconBlocks = [];
    data.block_icon.forEach(function(element) {
      iconBlocks.push({
        id: element._id,
        icon: process.env.IMG_URL + element.display.path,
        text: data.block_text.find(e => e._id === element._id).display
      });
    });

    console.log(iconBlocks);

    return {
      hero: process.env.IMG_URL + data.hero.path,
      heading: data.heading,
      subheading: data.subheading,
      iconblock: iconBlocks
    };
  }
};
</script>
