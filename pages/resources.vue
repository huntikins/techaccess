<template>
  <div class="pa-5">
    <v-form ref="form">
      <v-row>
        <v-col :md="6" :sm="12">
          <v-row>
            <v-card class="transparent" flat>
              <v-col cols="12">
                <v-card-title
                  v-html="heading"
                  class="d-block text-center white--text display-1 mb-0 pb-0"
                >
                </v-card-title>
              </v-col>
              <v-col :md="6" :offset-md="3" :sm="12" class="mt-0 pt-0">
                <v-img :src="hero" contain class="mx-auto" />
              </v-col>
              <v-row class="pa-4">
                <v-col :md="4" :sm="6">
                  <v-card hover v-ripple class="py-4">
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title
                          class="headline text-center"
                          v-html="benefit_1.heading"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>

                    <v-img
                      :src="benefit_1.img"
                      contain
                      width="100%"
                      class="px-4 "
                    ></v-img>

                    <v-card-text
                      v-html="benefit_1.text"
                      class="text-center caption"
                    >
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col :md="4" :sm="6">
                  <v-card hover v-ripple class="py-4">
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title
                          class="headline text-center"
                          v-html="benefit_2.heading"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>

                    <v-img
                      :src="benefit_2.img"
                      contain
                      width="100%"
                      class="px-4 "
                    ></v-img>

                    <v-card-text
                      v-html="benefit_2.text"
                      class="text-center caption"
                    >
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col :md="4" :sm="6">
                  <v-card hover v-ripple class="py-4">
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title
                          class="headline text-center"
                          v-html="benefit_3.heading"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>

                    <v-img
                      :src="benefit_3.img"
                      contain
                      width="100%"
                      class="px-4 "
                    ></v-img>

                    <v-card-text
                      v-html="benefit_3.text"
                      class="text-center caption"
                    >
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-row>
        </v-col>
        <v-col :md="6" :sm="12">
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
          <v-card class="pa-4">
            <v-card-title class="text-center d-block headline">
              {{ form_header }}
            </v-card-title>
            <v-row>
              <v-col cols="12" class="py-0">
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  label="First name"
                  color="secondary"
                  filled
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="py-0">
                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  label="Last name"
                  color="secondary"
                  filled
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="py-0">
                <v-text-field
                  v-model="libcard"
                  label="Library Card Number"
                  :rules="libcardrules"
                  color="secondary"
                  filled
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="py-0">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail Address"
                  color="secondary"
                  filled
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="py-0">
                <v-text-field
                  v-model="phone"
                  label="Phone Number"
                  color="secondary"
                  filled
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="py-0">
                <p class="text-left d-block pa-0 ma-0">
                  How would you like us to contact you?
                </p>
                <v-radio-group
                  v-model="contactMethod"
                  row="true"
                  class="pt-1 mt-0"
                >
                  <v-radio
                    class="pb-0 mb-0"
                    label="Email"
                    value="email"
                    color="secondary"
                  ></v-radio>
                  <v-radio
                    class="pb-0 mb-0"
                    label="Voice Call"
                    value="call"
                    color="secondary"
                  ></v-radio>
                  <v-radio
                    class="pb-0 mb-0"
                    label="Text*"
                    value="text"
                    color="secondary"
                  ></v-radio>
                </v-radio-group>
                <v-card-subtitle class="pt-0 mt-0 font-italic caption mr-auto"
                  >*normal text rates apply</v-card-subtitle
                >
              </v-col>
              <v-col cols="12" class="py-0">
                <v-textarea
                  filled
                  name="input-7-1"
                  label="List or describe your issue or question"
                  value=""
                  hint="Try to give as much information as you can, but don't worry if your having trouble describing the issue"
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
    </v-form>
  </div>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    alert: false,
    message: "",
    contactMethod: "email",
    firstname: "",
    lastname: "",
    libcard: "",
    libcardrules: [v => !!v || "Library Card Number is required"],
    phone: "",
    nameRules: [v => !!v || "Name is required"],
    email: "",
    emailRules: [v => /.+@.+/.test(v) || "E-mail must be valid"]
  }),
  async asyncData({ app }) {
    const { data } = await app.$axios.post(
      process.env.RESOURCEPAGE,
      JSON.stringify({}),
      {
        headers: { "Content-Type": "application/json" }
      }
    );

    return {
      hero: process.env.IMG_URL + data.hero.path,
      heading: data.heading,
      subheading: data.subheading,
      benefit_1: {
        heading: data.benefit_1_heading,
        img: process.env.IMG_URL + data.benefit_1_img.path,
        text: data.benefit_1_text
      },
      benefit_2: {
        heading: data.benefit_2_heading,
        img: process.env.IMG_URL + data.benefit_2_img.path,
        text: data.benefit_2_text
      },
      benefit_3: {
        heading: data.benefit_3_heading,
        img: process.env.IMG_URL + data.benefit_3_img.path,
        text: data.benefit_3_text
      },
      alert_message: data.email_confirmation_message,
      form_header: data.form_heading
    };
  },
  methods: {
    validate() {
      this.alert = false;
      if (this.$refs.form.validate()) {
        fetch(process.env.TECHRESOURCE_FORM, {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            form: {
              "First Name": this.firstname,
              "Last Name": this.lastname,
              "Library Card Number": this.libcard,
              Email: this.email,
              Phone: this.phone,
              "Contact Method": this.contactMethod,
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
