This reproduces an error in resolution of vue/apollo-option. To repro, run `pnpm install && pnpm type-check`. You'll see an error like this:

````
```shell
test.ts:7:12 - error TS2339: Property '$apollo' does not exist on type 'CreateComponentPublicInstance<{}, {}, {}, {}, { test(): void; }, ComponentOptionsMixin, ComponentOptionsMixin, {}, {}, {}, false, {}, {}, OptionTypesType<{}, {}, {}, {}, {}, {}>, ... 5 more ..., {}>'.

7       this.$apollo;
             ~~~~~~~
````

Then, to fix the error, uncomment the setting `node-linker=hoisted` in `.npmrc`. Run again: error goes away.

```

```
