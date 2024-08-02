import { createApolloProvider } from "@vue/apollo-option";
import { defineComponent } from "vue";

const component = defineComponent({
  methods: {
    test(): void {
      this.$apollo;
    },
  },
});
