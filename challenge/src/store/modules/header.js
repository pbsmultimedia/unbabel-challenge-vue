export default {
  state: {
    title: "",
    links: []
  },
  mutations: {
    // ...
    setHeaderTitle (state, title) {
      state.title = title
    },
    setHeaderLinks (state, links) {    
      state.links = links;
    }
  }
}
