import { createApolloProvider } from "@vue/apollo-option";
import { defineComponent } from "vue";

defineComponent({
  methods: {
    test(): void {
      this.$apollo;
    },
  },
});
