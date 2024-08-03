echo 'node-linker=hoisted' >.npmrc && rm -rf node_modules pnpm-lock.yaml && pnpm install && pnpm tsc --noEmit
