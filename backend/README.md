# Project Setup

## 1. Create `.env` file

In the root directory of the project, create a file named `.env` and add the following content:

```env
DATABASE_URL="postgresql://mustage:randompassword@localhost:5432/mydb?schema=public"
2. Start Docker services
Make sure Docker is running, then start the services:


docker-compose up -d
3. Install dependencies
If you haven't already:

npm install
4. Run the server

npm run start
✅ Done. The server should now be running and connected to the database.
```
