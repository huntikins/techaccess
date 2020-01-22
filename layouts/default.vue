<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item href="https://www.kclibrary.org/">
          <v-list-item-action>
            <v-icon>mdi-library</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title />Library Website
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-spacer />
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
      <v-card
        class="transparent pa-4 text--center navbar_brand"
        flat
        :ripple="false"
        to="/"
      >
        <v-img
          src="http://localhost:8080/storage/uploads/2020/01/16/5e208b1d27140techaccessgreen.png"
          contain
          width="30%"
          class="mx-auto"
        />
      </v-card>
      <v-spacer />
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer padless inset absolute app dark="true">
      <v-card flat tile dark="true" class="text-center" width="100vw">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>
        <v-row>
          <v-col :md="2" :sm="12" :offset-md="3">
            <v-card
              dark="true"
              flat
              class="mx-auto transparent"
              width="200"
              href="https://www.launchcode.org"
            >
              <v-img
                contain
                class="align-end"
                height="50px"
                src="http://localhost:8080/storage/uploads/2020/01/08/5e163b39bfe9flaunchcode.png"
              ></v-img>
            </v-card>
          </v-col>
          <v-col :md="2" :sm="12">
            <v-card
              dark="true"
              flat
              class="mx-auto transparent"
              width="200"
              href="https://www.p2pu.org"
            >
              <v-sheet class="px-2 transparent">
                <v-img
                  contain
                  class="align-end"
                  height="40px"
                  src="https://www.p2pu.org/assets/images/p2pu-logo.png"
                ></v-img>
              </v-sheet>
            </v-card>
          </v-col>
          <v-col :md="2" :sm="12">
            <v-card
              flat
              class="mx-auto transparent"
              width="200"
              href="https://digitalliteracyassessment.org"
              dark="true"
            >
              <v-sheet class="px-4 transparent">
                <v-img
                  contain
                  class="align-end"
                  height="50px"
                  src="https://assets.digitalliteracyassessment.org/static/main_website/img/ns-logo.png"
                ></v-img>
              </v-sheet>
            </v-card>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-card-text>
          {{ new Date().getFullYear() }} &copy;
          <strong>Kansas City Public Library</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-home",
          title: "Home",
          to: "/"
        },
        {
          icon: "mdi-book-information-variant",
          title: "About",
          to: "/about/"
        },
        {
          icon: "mdi-thought-bubble",
          title: "Resources",
          to: "/resources/"
        },
        {
          icon: "mdi-school",
          title: "Learn",
          to: "/learn/"
        },
        {
          icon: "mdi-charity",
          title: "Volunteer",
          to: "/volunteer/"
        },
        {
          icon: "mdi-hand-heart",
          title: "Partner",
          to: "/partner/"
        },
        {
          icon: "mdi-post",
          title: "Blog",
          to: "/blog/"
        }
      ],
      icons: [
        "mdi-facebook",
        "mdi-twitter",
        "mdi-google-plus",
        "mdi-linkedin",
        "mdi-instagram"
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Tech Access"
    };
  }
};
</script>
<style lang="css">
.v-card__title {
  word-break: normal !important;
}
.navbar_brand:before {
  content: "";
  background: none !important;
}
</style>
