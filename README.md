# About

Repository for TypeORM crash course from Laith Harb: [TypeORM Crash Course - TypeScript & Node ORM](https://www.youtube.com/watch?v=JaTbzPcyiOE&t=4095s)

# Configuration

1. Open ormconfig.ts
2. Create a psql database for the tutorial
3. Fill fields `username`, `password`, `database` with your information

# Bug

Currently it is impossible to make migrations in production. There are a few commands required to make a migration. There first one is:

```
# Generate a migration
npx typeorm migration:generate -n Mock

# It is also possible to execute it using npm
npm run create-migration
```

Here is the error:

```
Error during migration generation:
/home/raphael-dodobirdai/projects/typeorm-cc/ormconfig.ts:1
import { ConnectionOptions } from "typeorm";
^^^^^^

SyntaxError: Cannot use import statement outside a module
    at wrapSafe (internal/modules/cjs/loader.js:979:16)
    at Module._compile (internal/modules/cjs/loader.js:1027:27)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Module.require (internal/modules/cjs/loader.js:952:19)
    at require (internal/modules/cjs/helpers.js:88:18)
    at ConnectionOptionsReader.<anonymous> (/home/raphael-dodobirdai/projects/typeorm-cc/node_modules/typeorm/connection/ConnectionOptionsReader.js:120:46)
    at step (/home/raphael-dodobirdai/projects/typeorm-cc/node_modules/tslib/tslib.js:143:27)
    at Object.next (/home/raphael-dodobirdai/projects/typeorm-cc/node_modules/tslib/tslib.js:124:57)
```

Here are some ressources on how to solve this error:

- [TypeORM Entity in NESTJS - Cannot use import statement outside a module](https://stackoverflow.com/questions/59435293/typeorm-entity-in-nestjs-cannot-use-import-statement-outside-a-module)
- [Import statement breaks typeorm enitities when registered through config.json file](https://stackoverflow.com/questions/58529950/import-statement-breaks-typeorm-enitities-when-registered-through-config-json-fi)
- [Cannot use import statement outside a module" in typeorm migration when run nestjs app](https://stackoverflow.com/questions/61259812/cannot-use-import-statement-outside-a-module-in-typeorm-migration-when-run-nes)
- [Typescript & TypeORM: Cannot use import statement outside a module](https://stackoverflow.com/questions/67546054/typescript-typeorm-cannot-use-import-statement-outside-a-module)
- [TypeORM: SyntaxError: Cannot use import statement outside a module when creating migration](https://stackoverflow.com/questions/63050474/typeorm-syntaxerror-cannot-use-import-statement-outside-a-module-when-creating)
- [TypeORM Migration: Cannot use import statement outside a module](https://stackoverflow.com/questions/70256825/typeorm-migration-cannot-use-import-statement-outside-a-module)
