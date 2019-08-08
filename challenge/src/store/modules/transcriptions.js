import transcriptionsApi from "../../api/transcriptionsApi";
import Vue from "vue";

export default {
  state: {
    data: []
  },
  mutations: {
    addTranscriptionsMutation(state, data) {
      state.data.push(...data);

      // Defer the callback to be executed after the next DOM update cycle. Use it immediately after you’ve changed some data to wait for the DOM update.
      // is this the right place..?
      Vue.nextTick(()=>{
        document.getElementById("transcriptions-add-btn").scrollIntoView({
          behavior: 'smooth'
        })
      });
    },
    updateTranscriptionMutation(state, transcription) {
      state.data[transcription.id][transcription.type] = transcription.value;
    },
    deleteTranscriptionMutation(state, id) {
      state.data.splice(id, 1);
    },
    resetTranscriptions (state) {
      state.data = [];
    }
  },
  // actions is business logic
  actions: {
    fetchTranscriptionsAction(context) {
      transcriptionsApi.fetchTranscriptions()
        .then(r => {
          context.commit('addTranscriptionsMutation', r);
        })
    },
    uploadTranscriptionsAction(context) {
      if(!context.state.data.length)
        return alert("Please first add transcriptions to upload.");
      if (window.confirm("Upload all transcriptions?")) {
        transcriptionsApi.uploadTranscriptions(context.state.data).then(()=>{
          alert("Transcriptions uploaded with success!");
          context.commit('resetTranscriptions');
        })
      }
    },
    addNewLineAction(context) {
      let newLine = [{
        "id": "", // should be defined at the backend..?
        "voice": "Enter voice here",
        "text": "Enter text here"
      }];
      context.commit('addTranscriptionsMutation', newLine);
    },
    //no logic here..
    updateTranscriptionAction(context, data) {
      context.commit('updateTranscriptionMutation', data);
    },
    deleteTranscriptionAction(context, id) {
      if (window.confirm("Do you really want to delete this transcription?"))
        context.commit('deleteTranscriptionMutation', id);
    }
  }
}
