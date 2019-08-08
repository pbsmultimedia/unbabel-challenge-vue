<template>
  <div>
    <Header />
    <List />
  </div>
</template>

<script>
  import Header from "./components/Header.vue";
  import List from "./components/List.vue";
  import {mapState, mapActions, mapMutations} from "vuex";

  export default {
    name: "Transcriptions",
    components: { // register components
      Header,
      List
    },
    computed: mapState(["header"]),
    methods: {
      ...mapMutations(
        [
          "setHeaderTitle",
          "setHeaderLinks",
        ]
      ),
      ...mapActions (
        [
          "fetchTranscriptionsAction",
          "uploadTranscriptionsAction"
        ]
      )
    },
    mounted () {
      // each module set the title on the component header
      this.setHeaderTitle("Transcriptions");

      // each module sets header navbar items on the fly..!
      this.setHeaderLinks(
        [
          {"type": "button", "method": this.uploadTranscriptionsAction, "icon": "Upload", "title": "Upload transcriptions", "class": "upload"},
          {"type": "button", "method": this.fetchTranscriptionsAction, "icon": "Fetch", "title": "Fetch transcriptions"}
        ]
      );
      this.$store.subscribe((mutation, state) => {
        // ...
      })
    }
  }
</script>

<style>

  @import url('https://fonts.googleapis.com/css?family=Montserrat:500,600|Open+Sans&display=swap');

  body {
    background: #f6f7f8;
    padding: 0;
    margin: 0;
  }

  /* fixed header */
  .app {
    padding-top: 50px;
  }

  .app button {
    cursor: pointer;
    background: transparent;
    border: none;
  }

</style>
