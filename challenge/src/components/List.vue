<template>
  <div class="transcriptions">
    <ul class="transcriptions__list">
      <li
        class="transcriptions__item"
        v-for="(t, i) in transcriptions.data"
      >
        <div class="transcriptions__checkbox-wrapper">
          <input
            type="checkbox"
            :id="'transcriptions__item-'+i"
            class="transcriptions__checkbox"
          />
          <label
            :for="'transcriptions__item-'+i"
            class="transcriptions__checkbox-label"
          />
        </div>
        <div class="transcriptions__face-icon-wrapper">
          <IconBase
            icon="Person"
            class="transcriptions__face-icon"
          />
        </div>
        <div class="transcriptions__voice-and-text-wrapper">
          <div
            class="transcriptions__voice"
            contentEditable="true"
            title="click to edit voice"
            @blur="updateTranscriptionAction({'id': i, 'type': 'voice', 'value': $event.target.innerText})"
          >
            {{t.voice}}
          </div>
          <div
            class="transcriptions__text"
            contentEditable="true"
            title="click to edit text"
            @blur="updateTranscriptionAction({'id': i, 'type': 'text', 'value': $event.target.innerText})"
          >
            {{t.text}}
          </div>
        </div>
        <div class="transcriptions__delete-wrapper">
          <button
            @click="deleteTranscriptionAction(i)"
            class="transcriptions__delete-btn"
            title="delete transcription"
            >
              <IconBase icon="Delete" />
          </button>
        </div>
      </li>
    </ul>
    <div class="transcriptions__add-btn-row">
      <button
        @click="addNewLineAction"
        title="Add transcription"
        id="transcriptions-add-btn"
      >
        <IconBase icon="Add" />
      </button>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions} from "vuex";
  import IconBase from "./icons/IconBase.vue";

  export default {
    components: {
      IconBase
    },
    computed: mapState(["transcriptions"]), // loads the module from the store - gets mapped like transcriptions.{data-name-here}

    updated () {
      // ...
    },
    methods: {
      ...mapActions(
        [
          "addNewLineAction",
          "deleteTranscriptionAction",
          "updateTranscriptionAction"
        ]
      )
    }
  }
</script>

<style scoped lang="scss">
  .transcriptions {
      max-width: 710px;
      margin: 20px auto;
      position: relative;

      &__list {
          margin: 0 0 10px;
          padding: 0;
      }

      &__item {
          list-style-type: none;
          animation: fade-in 1s;
          border-bottom: 2px solid #f8f9f9;
          background: #fff;
          padding: 22px;
          display: flex;
      }

      &__voice-and-text-wrapper {
          padding: 0 10px;
          width: 80%;
      }

      &__checkbox-wrapper,
      &__face-icon-wrapper {
          display: flex;
          justify-content: center;
          color: #34A5FF;
      }

      &__checkbox {
          opacity: 0;

          &-label {
              width: 12px;
              height: 12px;
              border: 2px solid #859eff;
              border-radius: 2px;
              position: absolute;
              margin-top: 5px;
          }
      }

      &__checkbox:checked + &__checkbox-label {
          background: #859eff;
          transition: all 1s;

          &:after {
              content: "";
              position: absolute;
              width: 8px;
              height: 3px;
              border-left: 2px solid #fff;
              border-bottom: 2px solid #fff;
              transform: rotate(-45deg);
              top: 2px;
              left: 1px;
          }
      }

      &__checkbox:focus + &__checkbox-label {
          border: 2px solid #fc0;
          box-shadow: 0 0 2px rgba(0,0,0,.2);
      }

      &__face-icon-wrapper {
          padding-left: 16px;
      }

      &__text,
      &__voice {
          cursor: pointer;
      }

      &__voice {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          color: #566074;
          margin-bottom: 10px;
          font-size: 16px;
      }

      &__text {
          font-family: 'Open Sans', sans-serif;
          font-weight: 400;
          color: #778195;
          font-size: 16px;
      }

      &__text:focus,
      &__voice:focus {
          outline: 3px solid #fcfff4;
          background: #f6f7f8;
          box-shadow: inset 0 0 0 2px #859eff;
          padding: 5px;
          border-radius: 3px;
      }

      &__delete-wrapper {
          position: absolute;
          right: 22px;
      }

      &__delete-btn {
          width: 0;
          height: 0;
          overflow: hidden;
          color: #bfc4ce;
          transition: all .3s;
          &:hover {
            color: red;
            transition: all 1s;
          }
      }

      &__delete-btn:focus,
      &__item:hover &__delete-btn {
          width: auto;
          height: auto;
          overflow: visible;
      }

      &__item:hover &__face-icon-wrapper {
          color: #859eff; // use variables?
      }

      &__add-btn-row {
          display: flex;
          justify-content: center;
      }
  }

  @keyframes fade-in {
      0% {
          opacity: 0;
      }
      100% {
          opacity: 1;
      }
  }
</style>
