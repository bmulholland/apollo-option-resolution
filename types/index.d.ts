import { DollarApollo } from "./vue-apollo";
import { ApolloProvider } from "./apollo-provider";

declare module "@vue/runtime-core" {
  interface ComponentOptionsBase<
    Props,
    RawBindings,
    D,
    C extends ComputedOptions,
    M extends MethodOptions,
    Mixin extends ComponentOptionsMixin,
    Extends extends ComponentOptionsMixin,
    E extends EmitsOptions,
    EE extends string = string,
    // eslint-disable-next-line @typescript-eslint/ban-types
    Defaults = {},
  > {
    apolloProvider?: ApolloProvider;
    apollo?: object;
  }

  interface ComponentCustomProperties {
    $apolloProvider: ApolloProvider;
    $apollo: DollarApollo<this>;
  }
}
