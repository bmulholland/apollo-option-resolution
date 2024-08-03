import { DollarApollo } from "./vue-apollo";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $apollo: DollarApollo<this>;
  }
}
