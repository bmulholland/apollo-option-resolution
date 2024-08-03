This reproduces an error in resolution of vue/apollo-option. To repro, run `repro.sh`. I see an error like this:

```shell
test.ts:7:12 - error TS2339: Property '$apollo' does not exist on type 'CreateComponentPublicInstance<{}, {}, {}, {}, { test(): void; }, ComponentOptionsMixin, ComponentOptionsMixin, {}, {}, {}, false, {}, {}, OptionTypesType<{}, {}, {}, {}, {}, {}>, ... 5 more ..., {}>'.

7       this.$apollo;
             ~~~~~~~
```

Then, to fix the error, run `working.sh`. Run again: error goes away.

**You can see the commands in the shell scripts, but all they're doing is setting & unsetting node-linker=hoisted**

I've heard that others can't reproduce this, which points to an environment issue. Here's what I've tried to rule out:

1. Test on different versions of node (v20.16.0 & v22.5.1.)
2. Test on different versions of pnpm (9.6.0 & 9.0.6)
3. Test with node installed via asdf and homebrew
4. Prune pnpm store, delete the entire pnpm cache path dir
5. Restarted my computer

I'm on macOS 14.5, with an M1 MBP.

Specifically, here's a console session with me running this:

```shell
(main) [130] % ./working.sh
Packages: +25
+++++++++++++++++++++++++
Progress: resolved 25, reused 25, downloaded 0, added 25, done
Done in 1.7s
(main) % ./repro.sh
Packages: +25
+++++++++++++++++++++++++
Progress: resolved 25, reused 25, downloaded 0, added 25, done

dependencies:
+ typescript 5.5.4
+ vue 3.4.35

Done in 1.7s
test.ts:5:16 - error TS2664: Invalid module name in augmentation, module '@vue/runtime-core' cannot be found.

5 declare module "@vue/runtime-core" {
                 ~~~~~~~~~~~~~~~~~~~

test.ts:13:5 - error TS7023: 'test' implicitly has return type 'any' because it does not have a return type annotation and is referenced directly or indirectly in one of its return expressions.

13     test() {
       ~~~~

test.ts:14:19 - error TS2339: Property '$apollo' does not exist on type 'CreateComponentPublicInstance<{}, {}, {}, {}, { test(): any; }, ComponentOptionsMixin, ComponentOptionsMixin, {}, {}, {}, false, {}, {}, OptionTypesType<{}, {}, {}, {}, {}, {}>, ... 5 more ..., {}>'.

14       return this.$apollo;
                     ~~~~~~~


Found 3 errors in the same file, starting at: test.ts:5
```
