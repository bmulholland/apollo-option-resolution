import { defineComponent } from "vue";

interface DollarApollo {}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $apollo: DollarApollo;
  }
}

export default defineComponent({
  methods: {
    test() {
      return this.$apollo;
    },
  },
});
