<template>
  <div class="pa-5">
    <v-form ref="form">
      <v-container>
        <v-alert
          v-model="alert"
          prominent
          color="green"
          border="right"
          type="success"
          elevation="10"
          icon="mdi-email-check"
          dark="true"
          class="white--text"
        >
          {{ alert_message }}
        </v-alert>
        <v-row class="px-md-10 mx-md-10">
          <v-col :md="12" :sm="12">
            <v-card class="pa-4">
              <v-card-title
                class="text-center d-block headline"
                style="word-break: normal;"
              >
                Tech Coach Partner Application
              </v-card-title>
              <v-row>
                <v-col cols="12" class="py-0">
                  <v-text-field
                    v-model="firstname"
                    :rules="nameRules"
                    label="Your Name"
                    color="secondary"
                    filled
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" class="py-0">
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Email Address (of individual or organization's contact) "
                    color="secondary"
                    filled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" class="py-0">
                  <v-text-field
                    v-model="phone"
                    label="Phone Number (of individual or organization's contact)"
                    color="secondary"
                    filled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" class="py-0">
                  <v-select
                    :items="partnerType"
                    filled
                    v-model="partner"
                    color="secondary"
                    label="Individual or Organization?"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="12" class="py-0">
                  <v-textarea
                    filled
                    name="input-7-1"
                    label="Brief summary of need or potential partnership"
                    value=""
                    v-model="message"
                    color="secondary"
                    required
                  ></v-textarea>
                </v-col>
              </v-row>
              <v-btn
                block
                color="secondary"
                dark
                @click="validate"
                :disabled="!valid"
                >Submit</v-btn
              >
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    alert: false,
    partner: "",
    message: "",
    firstname: "",
    phone: "",
    nameRules: [v => !!v || "Name is required"],
    email: "",
    emailRules: [v => /.+@.+/.test(v) || "E-mail must be valid"],
    partnerType: ["Individual", "Organization"]
  }),
  async asyncData({ app }) {
    const { data } = await app.$axios.post(
      process.env.RESOURCEPAGE,
      JSON.stringify({}),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      }
    );

    return {
      alert_message: data.email_confirmation_message
    };
  },
  methods: {
    validate() {
      this.alert = false;
      if (this.$refs.form.validate()) {
        fetch(process.env.PARTNER_FORM, {
          method: "post",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: JSON.stringify({
            form: {
              Name: this.firstname,
              Email: this.email,
              Phone: this.phone,
              "Partner Type": this.partner,
              Message: this.message
            }
          })
        })
          .then(entry => entry.json())
          .then(() => {
            this.$refs.form.reset();
            this.alert = true;
          });
      }
    }
  }
};
</script>
