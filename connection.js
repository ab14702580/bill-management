import { MongoClient, ServerApiVersion } from 'mongodb';
import { config } from 'dotenv';
import path from 'path';

config({
  path: path.join(process.cwd(), '.env'),
});

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("MONGODB_URI is not defined in environment variables!");
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connect() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

const dbName = process.env.DB_NAME || 'assignment10';
const db = client.db(dbName);

export { connect, db, client };