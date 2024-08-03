import { createApolloProvider } from "@vue/apollo-option";
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    test() {
      return this.$apollo;
    },
  },
});
