<template>
  <div class="iframe-container">
    <iframe src="https://cms.kclibrary.org/auth/login" allowfullscreen></iframe>
  </div>
</template>
<script>
export default {
  layout: "cockpit"
};
</script>
<style lang="css" scoped>
.container {
  margin: 0 !important;
  padding: 0 !important;
}
.iframe-container {
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
}

.iframe-container iframe {
  border: 0;
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  width: 100vw;
}

/* 4x3 Aspect Ratio */
.iframe-container-4x3 {
  padding-top: 75%;
}
</style>
