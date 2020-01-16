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
      <v-col :md="12" :sm="12">
        <!-- Begin Mailchimp Signup Form -->
        <link
          href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css"
          rel="stylesheet"
          type="text/css"
        />
        <div id="mc_embed_signup">
          <form
            action="https://kclibrary.us18.list-manage.com/subscribe/post?u=02676a46f25558c3728470954&amp;id=54e93eb8b1"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <label for="mce-EMAIL">Subscribe to our Partner Newsletter</label>
              <input
                type="email"
                value=""
                name="EMAIL"
                class="email"
                id="mce-EMAIL"
                placeholder="email address"
                required
              />
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div
                style="position: absolute; left: -5000px;"
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_02676a46f25558c3728470954_54e93eb8b1"
                  tabindex="-1"
                  value=""
                />
              </div>
              <div class="clear">
                <v-btn
                  type="submit"
                  color="secondary"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  class="button"
                  >Subscribe</v-btn
                >
              </div>
            </div>
          </form>
        </div>

        <!--End mc_embed_signup-->
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
    alert: true,
    dialog: false
  }),
  methods: {
    submit() {
      this.dialog = false;
      this.$v.$touch();
    }
  },
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
