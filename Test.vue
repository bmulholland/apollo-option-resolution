<script lang="ts">
import { createApolloProvider } from '@vue/apollo-option'
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    test(): void {
      this.$apollo
    }
  }
})
</script>

<template>
  <div></div>
</template>
