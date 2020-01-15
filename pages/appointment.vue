<template>
  <div>
    <v-form ref="form">
      <v-container>
        <v-row>
          <v-col :md="12" :sm="12">
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
      </v-container>
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
      alert_message: data.email_confirmation_message,
      form_header: data.form_heading
    };
  },
  methods: {
    validate() {
      this.alert = false;
      if (this.$refs.form.validate()) {
        fetch(process.env.APPOINTMENT_FORM, {
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
