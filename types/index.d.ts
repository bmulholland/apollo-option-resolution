import { DollarApollo } from "./vue-apollo";

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
    apollo?: object;
  }

  interface ComponentCustomProperties {
    $apollo: DollarApollo<this>;
  }
}
