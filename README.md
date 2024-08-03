This reproduces an error in resolution of vue/apollo-option. To repro, run `repro.sh`. You'll see an error like this:

````
```shell
test.ts:7:12 - error TS2339: Property '$apollo' does not exist on type 'CreateComponentPublicInstance<{}, {}, {}, {}, { test(): void; }, ComponentOptionsMixin, ComponentOptionsMixin, {}, {}, {}, false, {}, {}, OptionTypesType<{}, {}, {}, {}, {}, {}>, ... 5 more ..., {}>'.

7       this.$apollo;
             ~~~~~~~
````

Then, to fix the error, run `working.sh`. Run again: error goes away.

You can see the commands in package.json, but all they're doing is setting & unsetting node-linker=hoisted
