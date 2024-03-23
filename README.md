# Basic CRUD Application with Prisma and PostgreSQL

This repository serves as a tutorial for building a basic CRUD (Create, Read, Update, Delete) application using Prisma with PostgreSQL.

## Steps to Set Up the Application

Follow these steps to create the application:

1. **Initialize npm**:
   - Run the following command to initialize npm in your project:
     ```bash
     npm init -y
     ```

2. **Install Dependencies**:
   - Install Prisma along with TypeScript and related packages as development dependencies:
     ```bash
     npm install prisma typescript ts-node @types/node --save-dev
     ```

3. **Initialize TypeScript Configuration**:
   - Generate a `tsconfig.json` file for TypeScript configuration:
     ```bash
     npx tsc --init
     ```
     - Modify `tsconfig.json`:
       ```json
       {
         "compilerOptions": {
           "rootDir": "src",
           "outDir": "dist"
         }
       }
       ```

4. **Initialize Prisma**:
   - Initialize Prisma in your project:
     ```bash
     npx prisma init
     ```
     - If encountering a 32-bit error, execute the following commands:
       ```bash
       export PRISMA_CLIENT_ENGINE_TYPE=binary
       export PRISMA_CLI_QUERY_ENGINE_TYPE=binary
       ```

5. **Define Database Schema**:
   - Create a schema in a `schema.prisma` file.
   - Run the migration to initialize the schema:
     ```bash
     npx prisma migrate dev --name Initialize the schema
     ```

6. **Generate Prisma Client**:
   - Generate Prisma Client:
     ```bash
     npx prisma generate
     ```

7. **Implement CRUD Operations**:
   - Create an `index.ts` file to define functions for basic CRUD operations.

8. **Create Testing File**:
   - Create a `test.ts` file to use the functions defined in `index.ts`.

9. **Compile TypeScript & Run**:
   - Compile TypeScript files and execute the test script:
     ```bash
     npx tsc && node dist/test.js
     ```

## Contribution

Contributions are welcomed. Feel free to open issues and submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

