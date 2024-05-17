import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

export default async function dbConnect(): Promise<void> {

  //we check if connection is connected then not make new connectionF
  if (connection.isConnected) {
    console.log(`Database alreday connected on port ${connection.isConnected}`);
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});

    connection.isConnected = db.connections[0].readyState;

    console.log(`Database connected on port ${connection.isConnected}`);
  } catch (error) {
    console.log("Database connection failed", error);
    process.exit(1);
  }
}
