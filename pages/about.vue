<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">
        <logo />
      </div>
      <v-card>
        <v-card-title class="headline text-center pb-0">
          <p style="width:100%;" class="d-block text-center pa-0">The Library is your access point for computers, internet and training</p>
        </v-card-title>
        <v-card-text class="text-center pt-0">
          <p>Tech Access is a collection of resources designed by the Library to help patrons learn how to use computers and other digital tools. Get answers to your questions about</p>
        </v-card-text>
        <v-list>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-center">
                <v-icon size="75">mdi-office</v-icon>
              </v-list-item-title>
              <v-list-item-title
                class="text-center"
              >&nbsp; Microsoft Office: Word, Excel, PowerPoint</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-center">
                <v-icon size="75">mdi-web</v-icon>
              </v-list-item-title>
              <v-list-item-title class="text-center">&nbsp; How to use the internet and email</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-center">
                <v-icon size="75">mdi-file-account</v-icon>
              </v-list-item-title>
              <v-list-item-title class="text-center">&nbsp; Building a resume</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-center">
                <v-icon size="75">mdi-key</v-icon>
              </v-list-item-title>
              <v-list-item-title class="text-center">&nbsp; Recovering a password</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-center">
                <v-icon size="75">mdi-xml</v-icon>
              </v-list-item-title>
              <v-list-item-title class="text-center">&nbsp; Building a website</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-center">
                <v-icon size="75">mdi-cellphone-erase</v-icon>
              </v-list-item-title>
              <v-list-item-title
                class="text-center"
              >&nbsp; How to get help with a broken computer or phone</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-center">
                <v-icon size="75">mdi-settings</v-icon>
              </v-list-item-title>
              <v-list-item-title
                class="text-center"
              >&nbsp; Change the settings on your computer or phone</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-center">
                <v-icon size="75">mdi-download</v-icon>
              </v-list-item-title>
              <v-list-item-title class="text-center">&nbsp; Downloading and uploading</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-center">
                <v-icon size="75">mdi-briefcase</v-icon>
              </v-list-item-title>
              <v-list-item-title
                class="text-center"
              >&nbsp; Filling out applications for a job, assistance benefits, healthcare, legal forms, taxes</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-center">
                <v-icon size="75">mdi-wifi</v-icon>
              </v-list-item-title>
              <v-list-item-title
                class="text-center"
              >&nbsp; Affordable options for getting internet in your home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-center">
                <v-icon size="75">mdi-more</v-icon>
              </v-list-item-title>
              <v-list-item-title class="text-center">&nbsp; and so much more!</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>
