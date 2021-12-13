# About

Repository for TypeORM crash course from Laith Harb: [TypeORM Crash Course - TypeScript & Node ORM](https://www.youtube.com/watch?v=JaTbzPcyiOE&t=4095s)

# Configuration

1. Open ormconfig.ts
2. Create a psql database for the tutorial
3. Fill fields `username`, `password`, `database` with your information
4. Run `npm i`

# Database Migrations

```
# Create a new migration, it will be saved in the src/migrations folder
npm run create-migration

# Execute the migration
npm run do-migration

# Revert the migration
npm run revert-migration
```
