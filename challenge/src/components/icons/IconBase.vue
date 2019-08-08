<template>
  <component :is="this.icon" />
</template>

<script>
  import Upload from "./Upload.vue";
  import Fetch from "./Fetch.vue";
  import Add from "./Add.vue";
  import Delete from "./Delete.vue";
  import Person from "./Person.vue";
  export default {
    components: { // register components..!
      Upload,
      Fetch,
      Add,
      Delete,
      Person
    },
    props: {
      icon: {
        type: String,
        //default: ''
      }
    }    
  }
</script>
