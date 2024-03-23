This is a basic application for you to know crud operation using prisma in postgress 
Steps to make it possible :

1). npm init -y
2). npm install prisma typescript ts-node @types/node --save-dev
3). npx tsc --init
    Change `rootDit` to `src`
    Change `outDir` to `dist`
4). npx prisma init
    (if some error comes for 32 bit) run the following commands
    export PRISMA_CLIENT_ENGINE_TYPE=binary
    export PRISMA_CLI_QUERY_ENGINE_TYPE=binary
5). make schema in schema,prisma file
    npx prisma migrate dev --name Initialize the schema
6). then make clients to do crud in the app
7). to make client :
    npx prisma generate
8). make a index.ts file to make functions to do basic crud
9). make a test.ts file to use those file
10). npx tsc && node dist/test.js 
