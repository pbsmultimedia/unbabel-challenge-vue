<template>
  <header class="header">
			<div class="header__row">
				<h1 class="header__title">
          {{header.title}}
				</h1>
				<nav class="header__nav">
					<ul class="header__list">
            <li
              class="header__item"
              v-for="link in header.links"
            >
            <button
              v-if="link.type = 'button'"
              @click="link.method"
              v-bind:title="link.title"
              v-bind:class="link.class"
            >
              <IconBase v-bind:icon="link.icon" />
            </button>
            </li>
					</ul>
				</nav>
			</div>
		</header>
</template>

<script>

  import { mapState, mapMutations} from "vuex";
  import IconBase from "./icons/IconBase.vue";

  export default {
    components: { // register
      IconBase,
    },
    computed: mapState(["header"])
  }
</script>

<style scoped lang="scss">

  .header {
    height: 50px;
    background: #fff;
    box-shadow: 0 2px 2px rgba(0,0,0,.25);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
      width: 100%;
      top: 0;
      z-index: 1;

      &__row {
      width: 100%;
      max-width: 710px;
      display: flex;
      align-items: center;
      position: relative;
    }

    &__title {
      display: inline;
      font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-size: 18px;
        color: #414c5e;
        padding-left: 22px;
    }

    &__nav {
      display: inline;
      position: absolute;
      right: 22px;
    }

    &__list {
      display: flex;
    }

    &__item {
      list-style-type: none;
      margin: 0;
      padding: 0;

      .upload svg {
        transition: all .1s;
        &:hover {
            margin-top: -4px;
            transition: all .5s;
          }
      }

    }
  }

</style>
