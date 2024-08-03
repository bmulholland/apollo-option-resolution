import { defineComponent } from "vue";
import "types/index";

export default defineComponent({
  methods: {
    test() {
      return this.$apollo;
    },
  },
});
