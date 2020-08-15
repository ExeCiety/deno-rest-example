import { MongoClient } from "https://deno.land/x/mongo@v0.9.2/mod.ts";

const client = new MongoClient();
client.connectWithUri("mongodb://localhost:27017");

console.log("Database Connected");

const db = client.database("practice-deno-rest");

export default db;
