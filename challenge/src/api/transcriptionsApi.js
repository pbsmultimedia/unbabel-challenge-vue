import axios from "axios";
import config from "../config";

export default {
  async fetchTranscriptions() {
    let r = await axios.get(config.transcriptionsEndpoint);
    //console.log(r.data);
    return r.data;
  },
  async uploadTranscriptions(data) {    
    axios.post(
      await config.transcriptionsEndpoint, {
        data
      }
    )
    .catch(e => {
      console.log(e);
      alert("An error has ocurred");
    });
  }
}
